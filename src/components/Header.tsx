import React, { useRef, useEffect, useCallback } from "react";
import styles from "rb3198/styles/scss/header.scss";
import { HeaderNavigation } from "./HeaderNavigation";
import { ThemeToggle } from "./ThemeToggle";
import { ThemedProps } from "rb3198/types/interfaces/ThemedProps";

interface HeaderProps extends ThemedProps {}

const HEADER_ID = "header";

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const pageScrollTop = useRef(window?.scrollY);

  const scrollListener = useCallback(function (this: Window, e: Event) {
    const newScrollTop = this?.scrollY;
    const header = this.document.getElementById(HEADER_ID);
    if (newScrollTop < pageScrollTop.current) {
      // Scrolled up, add scrolledUp class
      header?.classList.add(styles.scrolledUp);
      header?.classList.remove(styles.scrolled);
      if (newScrollTop < 100) {
        header?.classList.remove(styles.scrolledUp);
      }
    } else {
      header?.classList.add(styles.scrolled);
      header?.classList.remove(styles.scrolledUp);
      if (newScrollTop < 100) {
        header?.classList.remove(styles.scrolled);
      }
    }
    pageScrollTop.current = newScrollTop;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={styles.header} id={HEADER_ID}>
      <h1 className={styles.logo}>RB</h1>
      <div className={styles.navAndToggleContainer}>
        <HeaderNavigation />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};
