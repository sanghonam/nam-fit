"use client";

import { createSupabaseBrowserClient } from "@/utils/supabase/client";

const SignInWithKakao = () => {
  const supabase = createSupabaseBrowserClient();

  const signInWithKakao = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return <button onClick={signInWithKakao}>SignIn with Kakao</button>;
};

export default SignInWithKakao;
