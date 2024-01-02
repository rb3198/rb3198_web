import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "rb3198/styles/scss/header_navigation.mobile.scss";
import { RootReducer } from "rb3198/reducers";
import { connect, ConnectedProps } from "react-redux";
import { Screens } from "rb3198/types/enum/Screens";
import { bindActionCreators, Dispatch } from "redux";
import { setNavActive } from "rb3198/action_creators";
import { ThemeToggle } from "./ThemeToggle";
import { Theme } from "rb3198/types/enum/Theme";
import { TfiClose } from "react-icons/tfi";
import { NavigationList } from "./NavigationList";

interface HeaderNavigationProps {
  theme?: Theme;
  toggleTheme?: () => void;
}

/**
 * Animation duration of the drawer opening + closing
 */
const DRAWER_ANIM_DURATION = 500;

type ReduxProps = ConnectedProps<typeof connector>;

const HeaderNavigationComponent: React.FC<
  HeaderNavigationProps & ReduxProps
> = ({
  navActive,
  activeSection,
  screenSize,
  theme,
  toggleTheme,
  setNavActive,
}) => {
  const [drawerClosing, setDrawerClosing] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const closeNavigation = useCallback(() => {
    setDrawerClosing(true);
    closeTimeout.current = setTimeout(() => {
      setNavActive(false);
      setDrawerClosing(false);
    }, DRAWER_ANIM_DURATION);
  }, [setNavActive]);

  useEffect(() => {
    return () => {
      closeTimeout.current && clearTimeout(closeTimeout.current);
    };
  }, []);

  const renderCloseIcon = useCallback(() => {
    return (
      <div className={styles.closeIconContainer}>
        <TfiClose onClick={closeNavigation} />
      </div>
    );
  }, [closeNavigation]);

  const navigate: React.MouseEventHandler<HTMLAnchorElement> =
    useCallback(() => {
      closeNavigation();
    }, [closeNavigation]);

  if (screenSize > Screens.Small || !navActive) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.navBg} onClick={closeNavigation}></div>
      <div
        className={`${styles.navDrawer} ${
          (theme === Theme.Light &&
            screenSize === Screens.Small &&
            styles.drawerShadow) ||
          ""
        }`}
        data-closing={drawerClosing}
      >
        {renderCloseIcon()}
        {<NavigationList activeSection={activeSection} navigate={navigate} />}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootReducer) => {
  const { activeSection, navActive, screenSize } = state;
  return {
    navActive,
    activeSection,
    screenSize,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setNavActive: bindActionCreators(setNavActive, dispatch),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export const HeaderNavigationMobile = connector(HeaderNavigationComponent);
