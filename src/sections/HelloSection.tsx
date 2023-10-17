import React from "react";
import styles from "../styles/scss/sections/hello_section.scss";
import { Typing } from "rb3198/components/Typing";
import { DETAILED_DESC, ONE_LINERS } from "rb3198/constants/";
import { InProgressDisclaimer } from "rb3198/components/InProgressDisclaimer";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";

interface HelloSectionProps {}

export const HelloSection: React.FC<HelloSectionProps> = (props) => {
  return (
    <Section id={Sections.Hello} classes={styles.helloSection}>
      <p className={styles.subtext}>Hello there, I'm</p>
      <p className={styles.title}>Ronit.</p>
      <p className={styles.oneLineDesc}>
        I'm{" "}
        <Typing
          displayDuration={2}
          eraseDuration={2}
          typingDuration={2}
          strings={ONE_LINERS}
          classes={styles.oneLiners}
        />
      </p>
      <p
        className={styles.detailedDescription}
        dangerouslySetInnerHTML={{ __html: DETAILED_DESC }}
      ></p>
      <InProgressDisclaimer />
    </Section>
  );
};
