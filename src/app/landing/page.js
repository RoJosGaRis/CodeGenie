"use client";

import React, { useEffect } from "react";
import NavBar from "./NavBar";
import DataList from "./DataList";

import styles from "./landing.module.css";

const IndexPage = ({ userId }) => {
  const [information, setInformation] = React.useState([]);

  const fetchLanguages = ({ id }) => {
    fetch(`/api/languages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInformation({ ...information, languages: data });
      });
  };

  const fetchSkills = ({ id }) => {
    fetch(`/api/skills/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInformation({ ...information, skills: data });
      });
  };

  const fetchLibraries = ({ id }) => {
    fetch(`/api/libraries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInformation({ ...information, libraries: data });
      });
  };

  const fetchAverageDifficulty = ({ id }) => {
    fetch(`/api/averageDifficulty/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInformation({ ...information, averageDifficulty: data });
      });
  };

  useEffect(() => {
    fetchLanguages({ id: userId });
    fetchSkills({ id: userId });
    fetchLibraries({ id: userId });
    fetchAverageDifficulty({ id: userId });
  }, []);

  return (
    <div className={styles.dataLists}>
      <DataList informationTitle="Languages" />
      <DataList informationTitle="Languages" />
      <DataList informationTitle="Languages" />
      <DataList informationTitle="Languages" />
    </div>
  );
};

export default IndexPage;
