import React from "react";
import styles from "../styles/scss/sections/experience_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";

interface ExperienceSectionProps {}

export const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  return (
    <Section id={Sections.Experience} classes={styles.experienceSection}>
      Experience
    </Section>
  );
};
