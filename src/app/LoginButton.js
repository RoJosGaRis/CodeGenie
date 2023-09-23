import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = ({ signIn }) => {
  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default LoginButton;
