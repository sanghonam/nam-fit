import { createSupabaseBrowserClient } from "@/utils/supabase/client";

export const signInWithKakao = () =>
  createSupabaseBrowserClient().auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
