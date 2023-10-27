import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/scroll_up.scss";
import { BsChevronDoubleUp } from "react-icons/bs";
import { IconContext } from "react-icons";
import { ConnectedProps, connect } from "react-redux";
import { RootReducer } from "rb3198/reducers";
import { Sections } from "rb3198/types/enum/Sections";

type ReduxProps = ConnectedProps<typeof connector>;
const ScrollUpComponent: React.FC<ReduxProps> = ({ activeSection }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      onClick={scrollToTop}
      className={`${styles.container} ${
        (activeSection === Sections.Hello && styles.hidden) || ""
      }`}
    >
      <IconContext.Provider
        value={{ size: "24px", className: styles.scrollUpIcon }}
      >
        <BsChevronDoubleUp />
      </IconContext.Provider>
    </div>
  );
};

const mapStateToProps = (state: RootReducer) => {
  const { activeSection } = state;
  return {
    activeSection,
  };
};

const connector = connect(mapStateToProps);

export const ScrollUp = connector(ScrollUpComponent);
