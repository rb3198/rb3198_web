import React from "react";
import { REPO_LINK } from "rb3198/constants";
import styles from "rb3198/styles/scss/in_progress.scss";

export const InProgressDisclaimer: React.FC<{}> = () => {
  return (
    <p className={styles.inProgress}>
      Website Currently under development. Repository for this site can be found{" "}
      <a href={REPO_LINK} target="_blank">
        here
      </a>
    </p>
  );
};
