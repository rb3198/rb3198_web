import React, { memo } from "react";
import styles from "../styles/scss/skill_pill.scss";
import { IconContext } from "react-icons";
import { MdLightbulb } from "react-icons/md";

type SkillPillProps = {
  label: string;
  marginClasses?: string;
};

export const SkillPill: React.FC<SkillPillProps> = memo(
  ({ label, marginClasses }) => {
    return (
      <div className={`${styles.container} ${marginClasses || ""}`}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <MdLightbulb />
        </IconContext.Provider>
        <p>{label}</p>
      </div>
    );
  }
);
