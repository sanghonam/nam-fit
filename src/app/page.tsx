import { createSupabaseServerClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUser() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export default async function Index() {
  const user = await getUser();

  return redirect(!user ? "/auth/signIn" : "/workouts");
}
