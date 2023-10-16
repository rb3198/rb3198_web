import React from "react";
import styles from "../styles/scss/sections/experience_section.scss";
import { Section } from "./Section";
import { HeaderOption } from "rb3198/types/enum/HeaderOption";

interface ExperienceSectionProps {}

export const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  return (
    <Section id={HeaderOption.Experience} classes={styles.experienceSection}>
      Experience
    </Section>
  );
};
