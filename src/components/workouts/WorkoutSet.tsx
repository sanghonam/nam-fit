interface Set {
  id: string;
  workout_id: string;
  weight: number;
  reps: number;
  created_at: Date;
}

export default function WorkoutSet({ weight, reps }: Set) {
  return (
    <div>
      <div>{weight}</div>
      <div>{reps}</div>
    </div>
  );
}
