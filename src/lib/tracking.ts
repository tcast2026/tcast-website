export const TRACKING_LABELS: Record<string, { en: string; sw: string; tone: string }> = {
  RECEIVED: { en: "Received", sw: "Umepokelewa", tone: "tone-blue" },
  PACKED: { en: "Packed", sw: "Umefungashwa", tone: "tone-blue" },
  DISPATCHED: { en: "Dispatched", sw: "Umetumwa", tone: "tone-orange" },
  ON_TRANSIT: { en: "In transit", sw: "Uko safarini", tone: "tone-orange" },
  IN_CUSTOMS: { en: "In customs", sw: "Uko forodhani", tone: "tone-orange" },
  ARRIVED: { en: "Arrived", sw: "Umewasili", tone: "tone-orange" },
  DELIVERED: { en: "Delivered", sw: "Umekabidhiwa", tone: "tone-green" },
};

export function trackingStatus(status: string, sw: boolean) {
  const value = TRACKING_LABELS[status];
  return value ? value[sw ? "sw" : "en"] : status;
}

export function newestHistory<T extends { time: string }>(history: T[]) {
  return [...history].sort((a, b) => Date.parse(b.time) - Date.parse(a.time));
}
