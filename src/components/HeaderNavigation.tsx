import { HeaderOption } from "rb3198/types/enum/HeaderOption";
import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/header_navigation.scss";

interface HeaderNavigationProps {}

const OPTIONS: HeaderOption[] = Object.values(HeaderOption);

export const HeaderNavigation: React.FC<HeaderNavigationProps> = () => {
  const navigate = useCallback((option: HeaderOption) => {
    switch (option) {
      case HeaderOption.Hello:
        break;
      default:
        break;
    }
  }, []);

  return (
    <nav>
      <ul className={styles.navigationList}>
        {OPTIONS.map((option) => {
          return <li onClick={navigate.bind(null, option)}>{option}</li>;
        })}
      </ul>
    </nav>
  );
};
