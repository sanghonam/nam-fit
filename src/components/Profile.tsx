import { createSupabaseServerClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

export default async function Profile() {
  const user = await getUser();

  return (
    <div>
      <div>이름: {user?.user_metadata?.user_name}</div>
      <div>이메일: {user?.email}</div>
    </div>
  );
}
