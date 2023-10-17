import { Sections } from "rb3198/types/enum/Sections";
import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/header_navigation.scss";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { RootReducer } from "rb3198/reducers";
import { connect, ConnectedProps } from "react-redux";

interface HeaderNavigationProps {}

const OPTIONS: Sections[] = Object.values(Sections);

type ReduxProps = ConnectedProps<typeof connector>;

const HeaderNavigationComponent: React.FC<
  HeaderNavigationProps & ReduxProps
> = ({ activeSection }) => {
  const location = useLocation();
  const navigate: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    (e) => {
      const { target } = e;
      const option = (target as HTMLAnchorElement).getAttribute("data-section");
      let helloOption = document.querySelector(
        `[data-section="${Sections.Hello}"]`
      );
    },
    []
  );

  return (
    <nav>
      <ul className={styles.navigationList}>
        {OPTIONS.map((option) => {
          return (
            <li key={`#${option}`}>
              <HashLink
                to={`#${option}`}
                data-section={option}
                onClick={navigate}
                data-selected={option === activeSection}
              >
                {option}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: RootReducer) => {
  const { activeSection } = state;
  return {
    activeSection,
  };
};

const connector = connect(mapStateToProps);

export const HeaderNavigation = connector(HeaderNavigationComponent);
