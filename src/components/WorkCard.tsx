import React, { useCallback, useState } from "react";
import styles from "rb3198/styles/scss/work_card.scss";
import { GitLink } from "./GitLink";
import { Button } from "./Button";
import { BiChevronRight } from "react-icons/bi";
import { GitLinkConfig } from "rb3198/types/GitLinkConfig";
import { IconContext } from "react-icons";
import {
  PiMonitorDuotone,
  PiComputerTowerDuotone,
  PiDatabaseDuotone,
  PiHammerDuotone,
} from "react-icons/pi";
import { TechStack } from "rb3198/types/TechStack";
import { ProjectDetailModal } from "./ProjectDetailModal";
import {
  GalleryImage,
  TabularProjectData,
} from "rb3198/types/TabularProjectData";
import { Gallery } from "./Gallery";

export interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  gitLinkConfig: GitLinkConfig;
  techStack: TechStack;
  images?: GalleryImage[];
  tabularProjectData: TabularProjectData[];
}

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  subtitle,
  timeline,
  description,
  gitLinkConfig,
  techStack,
  images,
  tabularProjectData,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const openModal = useCallback(() => {
    setModalActive(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalActive(false);
  }, []);

  const renderTitleAndDesc = useCallback(() => {
    return (
      <>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>
          {subtitle}, <span>{timeline}</span>
        </p>
        <hr className={styles.subtitleSeparator} />
        <p
          className={styles.cardText}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </>
    );
  }, [title, description]);

  const renderReadMoreAndGitLinks = useCallback(() => {
    const { label, link } = gitLinkConfig;
    return (
      <div className={styles.actionsContainer}>
        <Button containerClasses={styles.readMore} onClick={openModal}>
          <p>Read More</p>
          <BiChevronRight />
        </Button>
        <GitLink
          isUppercase={!!link}
          classes={styles.gitButton}
          label={label}
          gitLink={link}
        />
      </div>
    );
  }, [gitLinkConfig, openModal]);

  const renderTechStack = useCallback(() => {
    if (!techStack) {
      return null;
    }
    const { frontend, backend, dbs, tools } = techStack;
    return (
      <div className={styles.techStackContainer}>
        <IconContext.Provider
          value={{ size: "24px", className: styles.techStackIcon }}
        >
          <div className={styles.techStackFacet}>
            <PiMonitorDuotone />
            <p>{frontend.join(", ")}</p>
          </div>
          <div className={styles.techStackFacet}>
            <PiComputerTowerDuotone />
            <p>{backend.join(", ")}</p>
          </div>
          <div className={styles.techStackFacet}>
            <PiDatabaseDuotone />
            <p>{dbs.join(", ")}</p>
          </div>
          <div className={styles.techStackFacet}>
            <PiHammerDuotone />
            <p>{tools.join(", ")}</p>
          </div>
        </IconContext.Provider>
      </div>
    );
  }, [techStack]);
  const renderContent = useCallback(() => {
    return (
      <div className={styles.textContainer}>
        {renderTitleAndDesc()}
        {renderReadMoreAndGitLinks()}
        {renderTechStack()}
      </div>
    );
  }, [renderTitleAndDesc, renderReadMoreAndGitLinks]);

  const renderImages = useCallback(() => {
    if (!images || images.length === 0) {
      return null;
    }
    return <Gallery images={images} />;
  }, [images]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          {renderContent()}
          {renderImages()}
          {/* {imgSrc && (
            <div
              className={styles.mainImg}
              style={{ backgroundImage: `url(${imgSrc})` }}
            ></div>
          )} */}
        </div>
      </div>
      {modalActive && (
        <ProjectDetailModal
          onClose={closeModal}
          title={title}
          tabularProjectData={tabularProjectData}
        />
      )}
    </>
  );
};
