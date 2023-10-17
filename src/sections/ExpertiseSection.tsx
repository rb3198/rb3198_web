import React from "react";
import styles from "../styles/scss/sections/expertise_section.scss";
import { Section } from "./Section";
import { HeaderOption } from "rb3198/types/enum/HeaderOption";

interface ExpertiseSectionProps {}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = (props) => {
  return (
    <Section id={HeaderOption.Expertise} classes={styles.expertiseSection}>
      Expertise
    </Section>
  );
};
