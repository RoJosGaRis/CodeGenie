import React from "react";
import styles from "./landing.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/logo.png";

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <Image
        className={styles.logo}
        height={10000}
        width={10000}
        src={image}
        alt="logo"
      />

      <Link className={`${styles.navLink}`} href={""}>
        Dashboard
      </Link>
      <Link className={`${styles.navLink}`} href={""}>
        Genie
      </Link>
      <Link className={`${styles.navLink}`} href={"landing/references"}>
        References
      </Link>
    </nav>
  );
};

export default NavBar;
