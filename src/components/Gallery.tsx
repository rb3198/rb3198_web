import { GalleryImage } from "rb3198/types/TabularProjectData";
import React, { useCallback, useEffect, useState } from "react";
import styles from "rb3198/styles/scss/gallery.scss";
import { Track } from "./Track";

interface GalleryProps {
  images: GalleryImage[];
  widthClasses: string;
  /**
   * Used for tracking purposes
   */
  title: string;
  /**
   * Default 3
   */
  maxSelectionsPerRow?: number;
  showControls?: boolean;
}
const DEFAULT_MAX_SELECTIONS_PER_ROW = 3;
const DEFAULT_SHOW_CONTROLS = true;
interface SelectionProps {
  images: GalleryImage[];
  title: string;
  rowNo: number;
  noOfSelectionsInRow: number;
  maxSelectionsPerRow: number;
  /**
   * Index of the selection wrt to the row it is in.
   */
  selectionLocalIdx: number;
  /**
   * Index of the image currently being displayed.
   */
  activeImgIdx: number;
  setActiveImgIdx: (newIdx: number) => void;
}

const Selection: React.FC<SelectionProps> = (props) => {
  const {
    images,
    rowNo,
    title,
    maxSelectionsPerRow,
    selectionLocalIdx,
    activeImgIdx,
    noOfSelectionsInRow,
    setActiveImgIdx,
  } = props;
  const selectionGlobalIdx = rowNo * maxSelectionsPerRow + selectionLocalIdx;
  const handleClick = useCallback(() => {
    setActiveImgIdx(selectionGlobalIdx);
  }, [setActiveImgIdx]);

  if (!images || images.length === 0) {
    return null;
  }

  const { label } = images[selectionGlobalIdx] || {};
  return (
    <Track
      as="div"
      trackClick
      cat="work_section_clicks"
      act="gallery_option_clicked"
      lab={`${title}_${label}`}
      style={{ width: `${100 / noOfSelectionsInRow}%` }}
      className={styles.imgSelections}
      onClick={handleClick}
      data-active={selectionGlobalIdx === activeImgIdx}
    >
      {label}
    </Track>
  );
};

export const Gallery: React.FC<GalleryProps> = (props) => {
  const {
    images,
    title,
    widthClasses,
    showControls = DEFAULT_SHOW_CONTROLS,
    maxSelectionsPerRow = DEFAULT_MAX_SELECTIONS_PER_ROW,
  } = props;
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  if (!images || images.length === 0) {
    return null;
  }

  useEffect(() => {
    setActiveImgIdx(0);
    setImgLoaded(false);
  }, [images]);

  useEffect(() => {
    setImgLoaded(false);
  }, [activeImgIdx]);

  const renderSelections = useCallback(() => {
    const noOfImages = images.length;
    const noOfRows = Math.ceil(noOfImages / maxSelectionsPerRow);
    const rows = [];
    for (let rowNo = 0; rowNo < noOfRows; rowNo++) {
      const calc = noOfImages - (rowNo + 1) * maxSelectionsPerRow;
      const noOfSelectionsInRow =
        calc >= 0 ? maxSelectionsPerRow : calc + maxSelectionsPerRow;
      const selections = new Array(noOfSelectionsInRow)
        .fill(0)
        .map((_, selectionLocalIdx) => {
          const selectionGlobalIdx =
            rowNo * maxSelectionsPerRow + selectionLocalIdx;
          return (
            <Selection
              activeImgIdx={activeImgIdx}
              title={title}
              key={`gallery_img_${selectionGlobalIdx}`}
              images={images}
              maxSelectionsPerRow={maxSelectionsPerRow}
              noOfSelectionsInRow={noOfSelectionsInRow}
              rowNo={rowNo}
              setActiveImgIdx={setActiveImgIdx}
              selectionLocalIdx={selectionLocalIdx}
            />
          );
        });
      rows.push(
        <div
          className={styles.imgSelectionsRow}
          key={`gallery_selection_row_${rowNo}`}
        >
          {selections}
        </div>
      );
    }
    return rows;
  }, [images, activeImgIdx, maxSelectionsPerRow]);

  const onImgLoad: React.ReactEventHandler<HTMLImageElement> =
    useCallback(() => {
      setImgLoaded(true);
    }, []);

  const { src, alt } = images[activeImgIdx] || {};
  return (
    <div className={`${styles.imgWithSelections} ${widthClasses}`}>
      <div
        className={`${styles.mainImgContainer} ${
          (!imgLoaded && styles.notLoaded) || ""
        }`}
        title={alt}
      >
        <img
          src={src}
          key={src}
          loading="lazy"
          onLoad={onImgLoad}
          className={`${styles.mainImg} ${imgLoaded && styles.loaded}`}
        />
      </div>
      {(showControls && (
        <div className={styles.imgSelectionsContainer}>
          {renderSelections()}
        </div>
      )) || <></>}
    </div>
  );
};
