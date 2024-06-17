"use client";

import dayjs from "dayjs";
import { getWorkoutsByDate } from "@/api/workout";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { NoDataMessage } from "@/components/common/NoDataMessage";
import { AddWorkoutButton } from "./AddWorkoutButton";
import Workout from "./Workout";

interface Workout {
  id: string;
  user_id: string;
  workout_date: Date;
  exercise_name: string;
  created_at: Date;
}

interface Set {
  id: string;
  workout_id: string;
  weight: number;
  reps: number;
  created_at: Date;
}

export default function WorkoutsPlan() {
  const searchParams = useSearchParams();
  const selectedDate = dayjs(searchParams.get("date") ?? dayjs());

  const { data: workouts, isLoading } = useQuery(
    getWorkoutsByDate(selectedDate)
  );

  if (workouts?.length === 0 && !isLoading) {
    return <NoDataMessage>등록된 운동 계획이 없습니다.</NoDataMessage>;
  }

  return (
    <div>
      <AddWorkoutButton />
      {workouts?.map((workout) => (
        <Workout key={workout.id} {...workout} />
      ))}
    </div>
  );
}
