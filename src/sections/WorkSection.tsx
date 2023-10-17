import React from "react";
import styles from "../styles/scss/sections/work_section.scss";
import { Section } from "./Section";
import { HeaderOption } from "rb3198/types/enum/HeaderOption";

interface WorkSectionProps {}

export const WorkSection: React.FC<WorkSectionProps> = (props) => {
  return (
    <Section id={HeaderOption.Work} classes={styles.workSection}>
      Work
    </Section>
  );
};
