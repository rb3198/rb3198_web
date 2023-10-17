import React from "react";
import styles from "../styles/scss/sections/work_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";

interface WorkSectionProps {}

export const WorkSection: React.FC<WorkSectionProps> = (props) => {
  return (
    <Section
      id={Sections.Work}
      classes={styles.workSection}
      title="Work"
    ></Section>
  );
};
