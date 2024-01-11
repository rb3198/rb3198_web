import React, { useCallback } from "react";
import { GalleryImage, WorkContent } from "rb3198/types/TabularProjectData";
import styles from "rb3198/styles/scss/project_modal_content.scss";
import { Button } from "./Button";
import { BiChevronRight } from "react-icons/bi";
import { Gallery } from "./Gallery";

export interface ProjectModalContentProps {
  content: WorkContent[];
  images?: GalleryImage[];
}

interface LiveLinkButtonProps {
  href: string;
}

const LiveLinkButton: React.FC<LiveLinkButtonProps> = ({ href }) => {
  const handleClick = useCallback(() => {
    window.open(href, "_blank");
  }, [href]);

  return (
    <Button
      containerClasses={styles.liveLinkButton}
      onClick={handleClick}
      disabled={false}
    >
      <p>View Live</p>
      <BiChevronRight />
    </Button>
  );
};

export const ProjectModalContent: React.FC<ProjectModalContentProps> = ({
  content,
  images,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        {content.map(({ title, summary, liveLink, imgSrc }, idx) => (
          <div key={`project_modal_content_${idx}`}>
            <div>
              {title && <h3 className={styles.title}>{title}</h3>}
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: summary }}
              ></p>
            </div>
            {liveLink && <LiveLinkButton href={liveLink} />}
          </div>
        ))}
      </div>
      {images && images.length > 0 && (
        <Gallery images={images} widthClasses={styles.galleryWidthClasses} />
      )}
    </div>
  );
};
