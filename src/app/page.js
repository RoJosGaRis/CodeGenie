"use client";

import React from "react";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();
  router.push("/login");
  return <></>;
};

export default App;
