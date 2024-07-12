import React from "react";
import styles from "../styles/scss/sections/hello_section.scss";
import { Typing } from "rb3198/components/Typing";
import { DETAILED_DESC, ONE_LINERS } from "rb3198/constants/";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import { ScrollDown } from "rb3198/components/ScrollDown";
import { IconContext } from "react-icons";
import { titleLinks } from "rb3198/constants/contact";
import { Track } from "rb3198/components/Track";

interface HelloSectionProps {}

export const HelloSection: React.FC<HelloSectionProps> = (props) => {
  return (
    <Section id={Sections.Hello} classes={styles.helloSection} alwaysVisible>
      <div>
        <p className={styles.subtext}>Hello there, I'm</p>
        <p className={styles.title}>
          Ronit.{" "}
          <IconContext.Provider value={{ className: styles.titleIcons }}>
            {titleLinks.map((linkConfig, idx) => {
              const { href, icon: Icon, label } = linkConfig;
              return (
                <Track
                  as="a"
                  trackClick
                  cat="link_clicks"
                  act="out_link"
                  lab={`hello_section_${label}`}
                  href={href}
                  className={styles.links}
                  key={`title_links_${idx}`}
                  target="_blank"
                >
                  <Icon />
                </Track>
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
      </div>
      <div id={styles.dp_container}>
        <div id={styles.dp}>
          <div className={styles.dp_ring} />
          <div className={styles.dp_ring} id={styles.dp_ring_2} />
        </div>
      </div>
      <ScrollDown scrollTo={Sections.Work} />
    </Section>
  );
};
