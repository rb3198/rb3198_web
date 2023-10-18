import React, { useCallback } from "react";
import styles from "../styles/scss/sections/skills_section.scss";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import {
  PiMonitorDuotone,
  PiComputerTowerDuotone,
  PiDatabaseDuotone,
  PiHammerDuotone,
  PiFlaskDuotone,
} from "react-icons/pi";
import { IconContext, IconType } from "react-icons";
import {
  BACKEND_DEV_DATA,
  DB_DEV_DATA,
  FRONTEND_DEV_DATA,
  TESTING_DEV_DATA,
  TOOLS_DEV_DATA,
} from "rb3198/constants";
import { Tooltip } from "react-tooltip";
import { InProgressDisclaimer } from "rb3198/components/InProgressDisclaimer";

interface SkillsSectionProps {}

type SubsectionData = {
  label: string;
  TechIcon: IconType;
};

const subsectionTitleIconConfig = {
  className: styles.subsectionTitleIcon,
  size: "28px",
};

const techIconConfig = {
  className: styles.techIcon,
};

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
            <tr>
              <td colSpan={2}></td>
              {data.map(({ TechIcon, label }) => {
                const anchorId = `skill_${label
                  .split(" ")
                  .join("_")
                  .replace(".", "dot")}`;
                return (
                  <td colSpan={1} className={styles.skillTd} key={anchorId}>
                    <a id={anchorId}>
                      <IconContext.Provider value={techIconConfig}>
                        <TechIcon />
                      </IconContext.Provider>
                    </a>
                    <Tooltip
                      anchorSelect={`#${anchorId}`}
                      place="bottom-end"
                      className={styles.skillTooltip}
                    >
                      {label}
                    </Tooltip>
                  </td>
                );
              })}
            </tr>
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
        BACKEND_DEV_DATA
      )}
      {renderSubsection("Databases", PiDatabaseDuotone, DB_DEV_DATA)}
      {renderSubsection("Testing", PiFlaskDuotone, TESTING_DEV_DATA)}
      {renderSubsection("Tools & Platforms", PiHammerDuotone, TOOLS_DEV_DATA)}
      <InProgressDisclaimer />
    </Section>
  );
};
