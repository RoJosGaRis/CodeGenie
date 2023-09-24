"use client";

import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import styles from "./login.module.css";

export default function App() {
  // const { data: session, status } = useSession();

  // if (session) {
  //   return <p>Hola {session.user.name}, bienvenido de vuelta</p>;
  // }
  const router = useRouter();

  const signUp = (name, email, password) => {
    console.log("signing in");

    const newUser = { name: name, email: email, password: password };
    console.log(newUser);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    fetch("http://localhost:8000/create", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          router.push("/landing/references");
        },
        (error) => {
          console.error(error);
        }
      );
  };
  const logIn = (name, email, password) => {
    console.log("signing in");

    const newUser = { name: name, email: email, password: password };
    console.log(newUser);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    fetch("http://localhost:4000/users/validate", requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <div className={styles.container}>
      <LoginForm signUp={signUp} logIn={logIn} />
    </div>
  );
}
