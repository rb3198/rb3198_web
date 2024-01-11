import { GalleryImage } from "rb3198/types/TabularProjectData";
import React, { useCallback, useEffect, useState } from "react";
import styles from "rb3198/styles/scss/gallery.scss";

interface GalleryProps {
  images: GalleryImage[];
  /**
   * Default 3
   */
  maxSelectionsPerRow?: number;
}
const DEFAULT_MAX_SELECTIONS_PER_ROW = 3;

interface SelectionProps {
  images: GalleryImage[];
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
    <div
      style={{ width: `${100 / noOfSelectionsInRow}%` }}
      className={styles.imgSelections}
      onClick={handleClick}
      data-active={selectionGlobalIdx === activeImgIdx}
    >
      {label}
    </div>
  );
};

export const Gallery: React.FC<GalleryProps> = (props) => {
  const { images, maxSelectionsPerRow = DEFAULT_MAX_SELECTIONS_PER_ROW } =
    props;
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
      rows.push(<div className={styles.imgSelectionsRow}>{selections}</div>);
    }
    return rows;
  }, [images, activeImgIdx, maxSelectionsPerRow]);

  const onImgLoad: React.ReactEventHandler<HTMLImageElement> =
    useCallback(() => {
      setImgLoaded(true);
    }, []);

  const { src, alt } = images[activeImgIdx] || {};
  return (
    <div className={styles.imgWithSelections}>
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
      <div className={styles.imgSelectionsContainer}>{renderSelections()}</div>
    </div>
  );
};
