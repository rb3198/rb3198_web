import React from "react";
import styles from "../styles/scss/hello_section.scss";

interface HelloSectionProps {}

export const HelloSection: React.FC<HelloSectionProps> = (props) => {
  return (
    <div className={styles.helloSection}>
      <p className={styles.subtext}>Hello there, I'm</p>
      <p className={styles.title}>Ronit.</p>
      <p className={styles.oneLineDesc}>
        I'm a <span>Web Developer.</span>
      </p>
    </div>
  );
};
