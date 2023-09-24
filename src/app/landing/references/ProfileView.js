import React from "react";
import styles from "./references.module.css";

const ProfileView = ({ profile }) => {
  return (
    <div className={styles.profileContainer}>
      <h2>Languages</h2>
      <ul>
        {profile.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <h2>Skills</h2>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Tools</h2>
      <ul>
        {profile.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileView;
