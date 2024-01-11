import React from "react";
import styles from "../styles/scss/sections/hello_section.scss";
import { Typing } from "rb3198/components/Typing";
import { DETAILED_DESC, ONE_LINERS } from "rb3198/constants/";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import { ScrollDown } from "rb3198/components/ScrollDown";
import { IconContext } from "react-icons";
import { titleLinks } from "rb3198/constants/contact";

interface HelloSectionProps {}

export const HelloSection: React.FC<HelloSectionProps> = (props) => {
  return (
    <Section id={Sections.Hello} classes={styles.helloSection}>
      <p className={styles.subtext}>Hello there, I'm</p>
      <p className={styles.title}>
        Ronit.{" "}
        <IconContext.Provider value={{ className: styles.titleIcons }}>
          {titleLinks.map((linkConfig, idx) => {
            const { href, icon: Icon } = linkConfig;
            return (
              <a href={href} key={`title_links_${idx}`} target="_blank">
                <Icon />
              </a>
            );
          })}
        </IconContext.Provider>
      </p>
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
      <ScrollDown scrollTo={Sections.Work} />
    </Section>
  );
};
