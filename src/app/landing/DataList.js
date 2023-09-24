import React from "react";
import styles from "./landing.module.css";

const DataList = ({ informationTitle, information }) => {
  // if (information === undefined) return <div></div>;

  return (
    <div className={styles.dataListContainer}>
      <h1>{informationTitle}</h1>
      <ul>
        {information === undefined
          ? ""
          : information.map((info, index) => <li key={index}>{info}</li>)}
      </ul>
    </div>
  );
};

export default DataList;
