import React, { useRef, useEffect, useCallback } from "react";
import styles from "rb3198/styles/scss/header.scss";
import { HeaderNavigation } from "./HeaderNavigation";
import { ThemeToggle } from "./ThemeToggle";
import { ThemedProps } from "rb3198/types/interfaces/ThemedProps";
import { HashLink } from "react-router-hash-link";

interface HeaderProps extends ThemedProps {}

const HEADER_ID = "header";
const HEADER_HEIGHT = 0.08 * window.innerHeight;
export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const pageScrollTop = useRef(window?.scrollY);

  const scrollListener = useCallback(function (this: Window, e: Event) {
    const header = this.document.getElementById(HEADER_ID);
    const handleScrollUp = () => {
      header?.classList.add(styles.scrolledUp);
      header?.classList.remove(styles.scrolled);
      if (newScrollTop < HEADER_HEIGHT) {
        header?.classList.remove(styles.scrolledUp);
      }
    };

    const handleScrollDown = () => {
      if (newScrollTop > HEADER_HEIGHT) {
        header?.classList.add(styles.scrolled);
        header?.classList.remove(styles.scrolledUp);
      }
    };

    const newScrollTop = this?.scrollY;
    if (newScrollTop < pageScrollTop.current) {
      handleScrollUp();
    } else {
      handleScrollDown();
    }
    pageScrollTop.current = newScrollTop;
  }, []);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={styles.header} id={HEADER_ID}>
      <h1 className={styles.logo} onClick={handleLogoClick}>
        RB
      </h1>
      <div className={styles.navAndToggleContainer}>
        <HeaderNavigation />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};
