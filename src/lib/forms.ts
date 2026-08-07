import { NextRequest } from "next/server";

const buckets = new Map<string, { count: number; reset: number }>();

export function rateLimit(request: NextRequest, scope: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
  const key = `${scope}:${ip}`;
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.reset <= now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }
  current.count += 1;
  buckets.set(key, current);
  return { allowed: current.count <= limit, retryAfter: Math.ceil((current.reset - now) / 1000) };
}

export function trustedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const originUrl = new URL(origin);
    const host = request.headers.get("host")?.split(":")[0];
    if (originUrl.hostname === host) return true;
    const allowed = (process.env.ALLOWED_FORM_ORIGINS || "").split(",").map((value) => value.trim()).filter(Boolean);
    return allowed.some((value) => new URL(value).origin === originUrl.origin);
  } catch {
    return false;
  }
}

export function cleanText(value: unknown, max = 2000) {
  return String(value ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max);
}

export function mailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}
