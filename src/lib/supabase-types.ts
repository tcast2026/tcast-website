// Minimal hand-written types for the columns the website actually reads.
// This mirrors supabase/migrations/0001_shipments_and_auth.sql — it is not
// a full generated schema (the Cargo App owns the write-side shape), just
// enough for the tracking API route to be type-safe.

export interface ShipmentRow {
  id: string;
  tracking_number: string;
  status: string;
  origin: string;
  destination: string;
  destination_city: string;
  weight_kg: number;
  pcs: number;
  receiver_name: string;
  expected_arrival: string | null;
  updated_at: string;
}

export interface ShipmentStatusEventRow {
  status: string;
  location: string;
  event_time: string;
  note: string | null;
  is_public: boolean;
}

export interface Database {
  public: {
    Tables: {
      shipments: {
        Row: ShipmentRow;
        Insert: Partial<ShipmentRow>;
        Update: Partial<ShipmentRow>;
        Relationships: [];
      };
      shipment_status_events: {
        Row: ShipmentStatusEventRow & { id: string; shipment_id: string; created_at: string };
        Insert: Partial<ShipmentStatusEventRow> & { shipment_id: string };
        Update: Partial<ShipmentStatusEventRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
