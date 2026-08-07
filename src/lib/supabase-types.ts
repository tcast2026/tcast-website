// Shape returned by the `track_shipment(p_tracking_number text)` Postgres
// function (see supabase/migrations in the tcast-cargo-webapp repo). Kept
// here as a single source of truth for the JSON keys the RPC builds with
// jsonb_build_object — update both together if the function's shape changes.

export interface TrackShipmentHistoryItem {
  status: string;
  location?: string;
  time: string;
  description?: string;
}

export interface TrackShipmentResult {
  shipmentNumber: string;
  status: string;
  origin: string;
  destination: string;
  currentLocation: string;
  receiver: string;
  weightKg: number;
  pcs: number;
  lastUpdate: string;
  history: TrackShipmentHistoryItem[];
}
