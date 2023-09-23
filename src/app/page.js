"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "./LoginButton";

export default function App() {
  const { data: session, status } = useSession();

  if (session) {
    return <p>Hola {session.user.name}, bienvenido de vuelta</p>;
  }
  return <LoginButton signIn={signIn} />;
}
