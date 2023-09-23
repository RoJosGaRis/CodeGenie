"use client";

import React from "react";
import { useSession } from "next-auth/react";

const IndexPage = () => {
  const { data: session, status } = useSession();

  if (session) {
    return <p>Hola {session.user.name}, bienvenido de vuelta</p>;
  }
};

export default IndexPage;
