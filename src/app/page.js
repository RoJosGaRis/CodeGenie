"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "./LoginButton";

export default function ClientComponent() {
  const { data: session, status } = useSession();

  if (session) {
    return <p>Logged In</p>;
  }
  return <LoginButton signIn={signIn} />;
}
