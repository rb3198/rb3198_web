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
import { useVerticalTextOverflow } from "rb3198/hooks/useVerticalTextOverflow";
import { RootReducer } from "rb3198/reducers";
import { ConnectedProps, connect } from "react-redux";
import { Screens } from "rb3198/types/enum/Screens";

export interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  gitLinkConfig: GitLinkConfig;
  liveLink?: string;
  techStack: TechStack;
  images?: GalleryImage[];
  tabularProjectData: TabularProjectData[];
}

type ReduxProps = ConnectedProps<typeof connector>;

export const WorkCardComponent: React.FC<ReduxProps & WorkCardProps> = ({
  title,
  subtitle,
  timeline,
  description,
  gitLinkConfig,
  techStack,
  images,
  screenSize,
  liveLink,
  tabularProjectData,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [_, summaryBoxRectRef] = useVerticalTextOverflow();

  const openModal = useCallback(() => {
    setModalActive(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalActive(false);
  }, []);

  const renderReadMoreAndGitLinks = useCallback(() => {
    const { label, link } = gitLinkConfig;
    const redirect = () => {
      window.open(liveLink, "_blank");
    };

    return (
      <div className={styles.actionsContainer}>
        <Button
          containerClasses={styles.readMore}
          onClick={openModal}
          trackClick
          cat="work_section_clicks"
          act="read_more_clicked"
          lab={title}
        >
          <p>Read More</p>
          <BiChevronRight />
        </Button>
        {liveLink ? (
          <Button
            trackClick
            cat="work_section_clicks"
            act="live_link_clicked"
            lab={title}
            containerClasses={styles.liveLinkButton}
            onClick={redirect}
            disabled={false}
          >
            <p>View Live</p>
            <BiChevronRight />
          </Button>
        ) : (
          <GitLink
            isUppercase={!!link}
            classes={styles.gitButton}
            label={label}
            gitLink={link}
          />
        )}
      </div>
    );
  }, [gitLinkConfig, liveLink, openModal]);

  const renderTitle = useCallback(() => {
    return (
      <>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>
          {subtitle + (screenSize === Screens.Mobile ? "" : ", ")}
          <span>{timeline}</span>
        </p>
        <hr className={styles.subtitleSeparator} />
      </>
    );
  }, [title, screenSize, renderReadMoreAndGitLinks]);

  const renderDescription = useCallback(() => {
    return (
      <div className={styles.cardTextContainer} ref={summaryBoxRectRef}>
        <p
          className={styles.cardText}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    );
  }, [description]);

  const renderTechStack = useCallback(() => {
    if (!techStack) {
      return null;
    }
    const { frontend, backend, dbs, tools } = techStack;
    return (
      <div className={styles.techStackContainer}>
        <IconContext.Provider value={{ className: styles.techStackIcon }}>
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
        {renderTitle()}
        <div className={styles.descButtonsStackContainer}>
          {renderDescription()}
          {renderReadMoreAndGitLinks()}
          {renderTechStack()}
        </div>
      </div>
    );
  }, [renderTitle, renderDescription, renderReadMoreAndGitLinks]);

  const renderImages = useCallback(() => {
    if (!images || images.length === 0) {
      return null;
    }
    return (
      <Gallery
        images={images}
        showControls={screenSize > Screens.Mobile}
        widthClasses={styles.galleryWidthClasses}
      />
    );
  }, [images, screenSize]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          {renderContent()}
          {renderImages()}
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

const mapStateToProps = (state: RootReducer) => {
  const { screenSize } = state;
  return {
    screenSize,
  };
};

const connector = connect(mapStateToProps);

export const WorkCard = connector(WorkCardComponent);
