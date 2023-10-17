import React from "react";
import styles from "../styles/scss/sections/skills_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";

interface SkillsSectionProps {}

export const SkillsSection: React.FC<SkillsSectionProps> = (props) => {
  return (
    <Section id={Sections.Skills} classes={styles.skillsSection}>
      Skills
    </Section>
  );
};
