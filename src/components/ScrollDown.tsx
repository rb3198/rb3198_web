import React, { useCallback, useLayoutEffect, useState } from "react";
import styles from "rb3198/styles/scss/scroll_down.scss";
import { BsChevronDoubleDown } from "react-icons/bs";
import { IconContext } from "react-icons";

type ScrollDownProps = {
  /**
   * ID of the element to scroll to.
   */
  scrollTo: string;
};

export const ScrollDown: React.FC<ScrollDownProps> = ({ scrollTo }) => {
  const [textVisible, setTextVisible] = useState(true);
  const [iconVisible, setIconVisible] = useState(true);
  const scroll = useCallback(() => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  const screenSizeListener = useCallback(() => {
    setTextVisible(window.innerHeight > 740);
    setIconVisible(window.innerHeight > 700);
  }, []);

  useLayoutEffect(() => {
    screenSizeListener();
    window.addEventListener("resize", screenSizeListener);
    return () => {
      window.removeEventListener("resize", screenSizeListener);
    };
  }, [screenSizeListener]);
  return (
    (textVisible || iconVisible) && (
      <div className={styles.container} onClick={scroll}>
        <IconContext.Provider value={{ className: styles.scrollIcon }}>
          {textVisible && <p>Explore my Profile!</p>}
          {iconVisible && <BsChevronDoubleDown />}
        </IconContext.Provider>
      </div>
    )
  );
};
