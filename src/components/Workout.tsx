import { Dayjs } from "dayjs";
import { getWorkoutByDate } from "@/api/workout";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { AddWorkout } from "./AddWorkout";

interface Wokrout {
  date: Dayjs;
}

export function Workout({ date }: Wokrout) {
  const { data: workout, isLoading, error } = useQuery(getWorkoutByDate(date));

  if (!workout && !isLoading) {
    return <AddWorkout />;
  }

  return <div>{JSON.stringify(workout)}</div>;
}
