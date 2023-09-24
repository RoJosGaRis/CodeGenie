import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

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
    <div className={styles.formContainer}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginButton;
