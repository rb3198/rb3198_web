import React, { useCallback, useState } from "react";
import styles from "rb3198/styles/scss/timeline.scss";
import { IconContext } from "react-icons";
import { BiChevronDown } from "react-icons/bi";
import { BsCalendar4Week } from "react-icons/bs";
import { InView } from "react-intersection-observer";
import { SkillPill } from "./SkillPill";

export interface ContentBoxProps {
  type: "left" | "right";
  title: string;
  at: string;
  timeline: string;
  bullets: string[];
  skills: string[];
}

export interface TimelineProps {
  content: Omit<ContentBoxProps, "type">[];
}

const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const { type, title, at, timeline, bullets, skills } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  const onInViewChange = useCallback((visible: boolean) => {
    visible && setVisible(visible);
  }, []);

  const handleContainerClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const renderTitleLocation = useCallback(() => {
    const downIconConfig = {
      className: `${styles.chevronDown} ${
        (isExpanded && styles.rotated) || ""
      }`,
    };
    return (
      <div className={styles.titleAtContainer}>
        <div>
          <h4 className={styles.contentTitle}>{title}</h4>
          <p className={styles.contentAt}>{at}</p>
        </div>
        <IconContext.Provider value={downIconConfig}>
          <BiChevronDown />
        </IconContext.Provider>
      </div>
    );
  }, [title, isExpanded, at]);

  const renderBullets = useCallback(() => {
    return (
      <div
        className={`${styles.bulletsContainer} ${
          (isExpanded && styles.expanded) || ""
        }`}
      >
        <ul>
          {bullets.map((bullet, idx) => (
            <li
              key={`bullet_${idx}`}
              dangerouslySetInnerHTML={{ __html: bullet }}
            />
          ))}
        </ul>
      </div>
    );
  }, [bullets, isExpanded]);

  const renderTimeline = useCallback(() => {
    const calendarIconConfig = {
      className: styles.calendar,
    };
    return (
      <div className={styles.contentTimeline}>
        <IconContext.Provider value={calendarIconConfig}>
          <BsCalendar4Week />
        </IconContext.Provider>
        <p>{timeline}</p>
      </div>
    );
  }, [timeline]);

  const renderSkills = useCallback(() => {
    return (
      <div id={styles.skillsContainer}>
        {skills.map((skill) => (
          <SkillPill
            label={skill}
            key={`${title}_${skill}`}
            marginClasses={styles.skillPillMarginClasses}
          />
        ))}
      </div>
    );
  }, [skills, title]);

  const containerClasses =
    type === "left" ? styles.leftContainer : styles.rightContainer;
  return (
    <InView
      className={`${styles.container} ${containerClasses} ${
        visible && styles.final
      }`}
      onChange={onInViewChange}
      onClick={handleContainerClick}
      threshold={0.2}
    >
      <div className={styles.content}>
        {renderTitleLocation()}
        {renderBullets()}
        {renderSkills()}
        {renderTimeline()}
      </div>
    </InView>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ content }) => {
  return (
    <div className={styles.timeline}>
      {content.map((contentBoxProps, idx) => (
        <ContentBox
          key={`timeline_content_box_${idx}`}
          {...contentBoxProps}
          type={idx % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
};
