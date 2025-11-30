// app/membership/page.tsx
import type { Metadata } from "next";
import MembershipClient from "./MembershipClient";

export const metadata: Metadata = {
  title: "Membership · Association of Eighty5ers FGCS",
};

export default function MembershipPage() {
  return <MembershipClient />;
}
