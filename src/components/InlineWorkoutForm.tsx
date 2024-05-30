import { InlineSetForm } from "./InlineSetForm";

export function InlineWorkoutForm() {
  return (
    <div>
      <div>name</div>
      {Array(10).map((index) => (
        <InlineSetForm key={index} />
      ))}
    </div>
  );
}
