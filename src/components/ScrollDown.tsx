import React, { useCallback } from "react";
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
  const scroll = useCallback(() => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);
  return (
    <div className={styles.container} onClick={scroll}>
      <IconContext.Provider value={{ className: styles.scrollIcon }}>
        <p>Explore my Profile!</p>
        <BsChevronDoubleDown />
      </IconContext.Provider>
    </div>
  );
};
