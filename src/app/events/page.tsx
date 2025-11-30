// app/events/page.tsx
import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events · Association of Eighty5ers FGCS",
};

export default function EventsPage() {
  return (
    <main className="mx-auto px-4 space-y-4">
      <EventsClient />
    </main>
  );
}
