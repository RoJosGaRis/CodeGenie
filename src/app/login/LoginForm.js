import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles_navbar from "../landing/landing.module.css";
import styles from "./login.module.css";
import Image from "next/image";
import image from "../../../public/logo.png";

const LoginButton = ({ signUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(formData.name, formData.email, formData.password);
  };

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  return (
    <>
      <nav className={`${styles_navbar.navBarContainer} ${styles.topBar}`}>
        <Image
          className={styles_navbar.logo}
          height={10000}
          width={10000}
          src={image}
          alt="logo"
        />
      </nav>
      <div className={styles.formContainer}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.inputForm}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleNameChange}
          />
          <input
            className={styles.inputForm}
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <input
            className={styles.inputForm}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <input className={styles.button_login} type="submit" />
        </form>
      </div>
    </>
  );
};

export default LoginButton;
