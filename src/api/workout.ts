import { createSupabaseBrowserClient } from "@/utils/supabase/client";
import { Dayjs } from "dayjs";

const TABLE_NAME = "workouts";

export const getWorkoutsByDate = (date: Dayjs) =>
  createSupabaseBrowserClient()
    .from(TABLE_NAME)
    .select(`*, sets(*)`)
    .eq("workout_date", date)
    .throwOnError();
