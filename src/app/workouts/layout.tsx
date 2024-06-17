import Profile from "@/components/Profile";
import WorkoutsDatePicker from "@/components/workouts/WorkoutsDatePicker";

export default function WorkoutsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Profile />
      <WorkoutsDatePicker />
      {children}
    </div>
  );
}
