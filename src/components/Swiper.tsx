import React, {
  PropsWithChildren,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import styles from "rb3198/styles/scss/swiper.scss";
import { BiChevronLeft } from "react-icons/bi";
import { IconContext } from "react-icons";

export interface SwiperProps {
  containerClasses?: string;
  slidesPerView?: number;
  /**
   * Margin between two slides
   */
  spacing?: string;
}

interface SwiperStatusProps {
  activeSlide: number;
  totalSlides: number;
  containerDomRect?: DOMRect;
  scroll: (newSlideIdx: number) => void;
}

const SwiperStatus: React.FC<SwiperStatusProps> = ({
  activeSlide,
  totalSlides,
  scroll,
}) => {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeBar = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (activeBar.current) {
      const { x: activeBarX = 0, y: activeBarY = 0 } =
        barRefs.current[activeSlide]?.getBoundingClientRect() || {};
      const { x: containerX = 0, y: containerY = 0 } =
        container.current?.getBoundingClientRect() || {};
      activeBar.current.style.left = `${
        (activeBarX - containerX).toString() ?? "0"
      }px`;
      activeBar.current.style.top = `${
        (activeBarY - containerY)?.toString() ?? "0"
      }px`;
      if (!activeBar.current.classList.contains(styles.activeBarAnimated)) {
        activeBar.current.classList.add(styles.activeBarAnimated);
      }
    }
  }, [activeSlide, totalSlides]);

  const bars = new Array(totalSlides)
    .fill(null)
    .map((_, idx) => (
      <div
        className={styles.swiperStatusBars}
        key={`status-bars-${idx}`}
        ref={(el) => (barRefs.current[idx] = el)}
        onClick={scroll.bind(null, idx)}
      ></div>
    ));
  return (
    <div className={styles.swiperStatusContainer} ref={container}>
      {bars}{" "}
      <div
        className={`${styles.swiperStatusBars} ${styles.activeBar}`}
        ref={activeBar}
      ></div>
    </div>
  );
};
const iconConfig = {
  size: "24px",
};

export const Swiper: React.FC<PropsWithChildren<SwiperProps>> = ({
  containerClasses,
  children,
  slidesPerView = 1,
  spacing,
}) => {
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const childrenRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const scroll = (newSlideIdx: number) => {
    if (!!childrenRefs.current[newSlideIdx] && !!contentContainerRef.current) {
      const { x: containerX } =
        contentContainerRef.current.getBoundingClientRect();
      const { x: newSlideX } =
        childrenRefs.current[newSlideIdx]!.getBoundingClientRect();
      contentContainerRef.current.scrollLeft += newSlideX - containerX;
      setActiveSlide(newSlideIdx);
    }
  };
  const scrollLeft = () => {
    const newSlideIdx =
      (activeSlide - 1 + childrenRefs.current.length) %
      childrenRefs.current.length;
    scroll(newSlideIdx);
  };

  const scrollRight = () => {
    const newSlideIdx = (activeSlide + 1) % childrenRefs.current.length;
    scroll(newSlideIdx);
  };
  const nChildren = React.Children.count(children);

  useLayoutEffect(() => {
    setActiveSlide(0);
  }, [nChildren]);
  return (
    <div className={`${styles.swiperContainer} ${containerClasses || ""}`}>
      {(nChildren > 1 && (
        <IconContext.Provider value={iconConfig}>
          <div className={styles.swipeLeft} onClick={scrollLeft}>
            <BiChevronLeft />
          </div>
          <div className={styles.swipeRight} onClick={scrollRight}>
            <BiChevronLeft />
          </div>
        </IconContext.Provider>
      )) || <></>}
      <div className={styles.swiperContent} ref={contentContainerRef}>
        {React.Children.map(children, (child, idx) => (
          <div
            style={{
              width: `${100 / slidesPerView}%`,
              height: "100%",
              display: "flex",
              flexShrink: 0,
              marginRight: idx !== nChildren - 1 ? spacing || "" : undefined,
            }}
            ref={(el) => (childrenRefs.current[idx] = el)}
          >
            {child}
          </div>
        ))}
      </div>
      <SwiperStatus
        activeSlide={activeSlide}
        totalSlides={nChildren}
        containerDomRect={contentContainerRef?.current?.getBoundingClientRect()}
        scroll={scroll}
      />
    </div>
  );
};
