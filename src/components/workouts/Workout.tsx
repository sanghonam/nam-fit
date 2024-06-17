import WorkoutSet from "./WorkoutSet";

interface Set {
  id: string;
  workout_id: string;
  weight: number;
  reps: number;
  created_at: Date;
}

interface Workout {
  id: string;
  user_id: string;
  sets: Set[];
  workout_date: Date;
  exercise_name: string;
  created_at: Date;
}

export default function Workout({ exercise_name, sets }: Workout) {
  return (
    <div>
      <div>{exercise_name}</div>
      {sets.map((set) => (
        <WorkoutSet key={set.id} {...set} />
      ))}
    </div>
  );
}
