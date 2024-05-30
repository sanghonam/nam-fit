"use client";

import { signInWithKakao } from "@/api/auth";

const SignInWithKakao = () => {
  const handleSignInButtonClick = async () => {
    await signInWithKakao();
  };

  return <button onClick={handleSignInButtonClick}>SignIn with Kakao</button>;
};

export default SignInWithKakao;
