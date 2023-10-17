import { HeaderOption } from "rb3198/types/enum/HeaderOption";
import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/header_navigation.scss";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { RootReducer } from "rb3198/reducers";
import { connect, ConnectedProps } from "react-redux";

interface HeaderNavigationProps {}

const OPTIONS: HeaderOption[] = Object.values(HeaderOption);

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
        `[data-section="${HeaderOption.Hello}"]`
      );
      if (option === HeaderOption.Hello) {
        e.preventDefault();
        window.history.pushState({}, "", `/#${option}`);
        window.scrollTo({ behavior: "smooth", top: 0 });
        let prevSelectedOption = document.querySelector(
          `[data-selected="true"]`
        );
        prevSelectedOption?.setAttribute("data-selected", "false");
        helloOption?.setAttribute("data-selected", "true");
      } else {
        helloOption?.setAttribute("data-selected", "false");
      }
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
