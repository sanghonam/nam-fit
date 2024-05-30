import type { Metadata } from "next";
import Profile from "@/components/Profile";

export const metadata: Metadata = {
  title: "namfit",
  description: "namfit is fitness planner",
};

export default function PlannerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Profile />
      {children}
    </div>
  );
}
