import React, { useRef, useEffect, useCallback } from "react";
import styles from "rb3198/styles/scss/header.scss";
import { HeaderNavigation } from "./HeaderNavigation";
import { ThemeToggle } from "./ThemeToggle";
import { ThemedProps } from "rb3198/types/interfaces/ThemedProps";
import { RootReducer } from "rb3198/reducers";
import { ConnectedProps, connect } from "react-redux";
import { Screens } from "rb3198/types/enum/Screens";
import { IconContext } from "react-icons";
import { TbMenuDeep } from "react-icons/tb";

interface HeaderProps extends ThemedProps {}

const HEADER_ID = "header";
const HEADER_HEIGHT = 0.08 * window.innerHeight;

type ConnectedHeaderProps = HeaderProps & ConnectedProps<typeof connector>;

const HeaderComponent: React.FC<ConnectedHeaderProps> = ({
  theme,
  screenSize,
  toggleTheme,
}) => {
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

  const renderDesktopNav = useCallback(() => {
    return (
      <>
        <HeaderNavigation />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </>
    );
  }, [theme, toggleTheme]);
  return (
    <header className={styles.header} id={HEADER_ID}>
      <h1 className={styles.logo} onClick={handleLogoClick}>
        RB
      </h1>
      <div className={styles.navAndToggleContainer}>
        {screenSize <= Screens.Small ? (
          <IconContext.Provider value={{ className: styles.menuIcon }}>
            <TbMenuDeep />
          </IconContext.Provider>
        ) : (
          renderDesktopNav()
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state: RootReducer) => {
  const { screenSize } = state;
  return {
    screenSize,
  };
};

const connector = connect(mapStateToProps);
export const Header = connector(HeaderComponent);
