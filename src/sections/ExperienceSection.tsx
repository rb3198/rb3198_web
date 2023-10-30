import React from "react";
import styles from "../styles/scss/sections/experience_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import { InProgressDisclaimer } from "rb3198/components/InProgressDisclaimer";

interface ExperienceSectionProps {}

export const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  return (
    <Section
      id={Sections.Experience}
      classes={styles.experienceSection}
      title={"Experience"}
    >
      <InProgressDisclaimer />
    </Section>
  );
};
