import { HeaderOption } from "rb3198/types/enum/HeaderOption";
import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/header_navigation.scss";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

interface HeaderNavigationProps {}

const OPTIONS: HeaderOption[] = Object.values(HeaderOption);

export const HeaderNavigation: React.FC<HeaderNavigationProps> = () => {
  const location = useLocation();
  const navigate: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
    (e) => {
      const { target } = e;
      const option = (target as HTMLAnchorElement).getAttribute("data-section");
      let helloOption = document.querySelector(`[data-section="Hello"]`);
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
          let isSelected = false;
          if (!location.hash) {
            isSelected = option === HeaderOption.Hello;
          } else {
            isSelected = location.hash === `#${option}`;
          }
          return (
            <li>
              <HashLink
                to={`#${option}`}
                data-section={option}
                onClick={navigate}
                data-selected={isSelected}
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
