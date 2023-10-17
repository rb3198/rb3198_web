import React from "react";
import styles from "../styles/scss/sections/expertise_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";

interface ExpertiseSectionProps {}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = (props) => {
  return (
    <Section id={Sections.Expertise} classes={styles.expertiseSection}>
      Expertise
    </Section>
  );
};
