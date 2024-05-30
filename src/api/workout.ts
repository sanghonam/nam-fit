import { createSupabaseBrowserClient } from "@/utils/supabase/client";
import { Dayjs } from "dayjs";

const TABLE_NAME = "workouts";

export const getWorkoutByDate = (date: Dayjs) =>
  createSupabaseBrowserClient()
    .from(TABLE_NAME)
    .select("workout_date, exercise_name")
    .eq("workout_date", date)
    .throwOnError()
    .maybeSingle();
