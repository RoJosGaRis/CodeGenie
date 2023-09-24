"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

const IndexPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(session),
      };

      fetch("http://localhost:4000/users/newUser", requestOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }, [session]);

  if (session) {
    return (
      <div>
        <p>{JSON.stringify(session)}</p>;
      </div>
    );
  }
};

export default IndexPage;
