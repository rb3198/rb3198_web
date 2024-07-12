import React, { Fragment, memo, useCallback, useRef, useState } from "react";
import styles from "../styles/scss/sections/skills_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import {
  PiMonitorDuotone,
  PiComputerTowerDuotone,
  PiDatabaseDuotone,
  PiHammerDuotone,
  PiFlaskDuotone,
  PiBrainDuotone,
} from "react-icons/pi";
import { IconContext, IconType } from "react-icons";
import {
  BACKEND_DEV_DATA,
  DB_DEV_DATA,
  FRONTEND_DEV_DATA,
  ML_DEV_DATA,
  TESTING_DEV_DATA,
  TOOLS_DEV_DATA,
} from "rb3198/constants";
import { Tooltip } from "react-tooltip";
import { useInView } from "react-intersection-observer";

interface SkillsSectionProps {}

type SubsectionData = {
  label: string;
  TechIcon: IconType;
};

const subsectionTitleIconConfig = {
  className: styles.subsectionTitleIcon,
};

const techIconConfig = {
  className: styles.techIcon,
};

const SkillsRow: React.FC<{ data: SubsectionData[] }> = memo(({ data }) => {
  const [ref, inViewport, entry] = useInView();
  const [visible, setVisible] = useState(false);
  if (inViewport && !visible) {
    if (entry) {
      const { target } = entry;
      const { childNodes } = target;
      let i = 0;
      for (let childId in childNodes) {
        const child = childNodes[childId];
        if (child.nodeType === child.ELEMENT_NODE && child.nodeName === "TD") {
          const el = child as HTMLElement;
          el.style.transitionDelay = `${i / 4}s`;
          el.classList.add(styles.visibleTd);
        }
        i++;
      }
    }
    setVisible(true);
  }
  return (
    <tr ref={ref}>
      <td colSpan={2}></td>
      {data.map(({ TechIcon, label }) => {
        const anchorId = `skill_${label
          .split(" ")
          .join("_")
          .replace(".", "dot")}`;
        return (
          <Fragment key={anchorId}>
            <td colSpan={1} className={styles.skillTd}>
              <a id={anchorId}>
                <IconContext.Provider value={techIconConfig}>
                  <TechIcon className={techIconConfig.className} />
                </IconContext.Provider>
              </a>
            </td>
            <Tooltip
              anchorSelect={`#${anchorId}`}
              place="bottom-end"
              opacity={1}
              className={styles.skillTooltip}
            >
              {label}
            </Tooltip>
          </Fragment>
        );
      })}
    </tr>
  );
});

export const SkillsSection: React.FC<SkillsSectionProps> = (props) => {
  const renderSubsection = useCallback(
    (title: string, TitleIcon: IconType, data: SubsectionData[]) => {
      return (
        <table className={styles.skillTable}>
          <tbody>
            <tr>
              <td colSpan={1} className={styles.titleIconTd}>
                <IconContext.Provider value={subsectionTitleIconConfig}>
                  <TitleIcon />
                </IconContext.Provider>
              </td>
              {/* @ts-ignore */}
              <td colSpan={"100%"}>
                <h4 className={styles.subsectionTitle}>{title}</h4>
              </td>
            </tr>
            <SkillsRow data={data} />
          </tbody>
        </table>
      );
    },
    []
  );

  return (
    <Section id={Sections.Skills} classes={styles.skillsSection} title="Skills">
      {renderSubsection(
        "Frontend Development",
        PiMonitorDuotone,
        FRONTEND_DEV_DATA
      )}
      {renderSubsection(
        "Backend Development",
        PiComputerTowerDuotone,
        // @ts-ignore
        BACKEND_DEV_DATA
      )}
      {renderSubsection("Databases", PiDatabaseDuotone, DB_DEV_DATA)}
      {renderSubsection("Tools & Platforms", PiHammerDuotone, TOOLS_DEV_DATA)}
      {renderSubsection("Machine Learning", PiBrainDuotone, ML_DEV_DATA)}
      {renderSubsection("Testing", PiFlaskDuotone, TESTING_DEV_DATA)}
    </Section>
  );
};
