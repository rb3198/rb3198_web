import React, { useCallback, useEffect } from "react";
import { setScreenSize } from "rb3198/action_creators";
import { ConnectedProps, connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Screens } from "rb3198/types/enum/Screens";

type ReduxProps = ConnectedProps<typeof connector>;

const ScreenSizeListenerComponent: React.FC<ReduxProps> = (props) => {
  const { setScreenSize } = props;

  const screenSizeListener = useCallback(() => {
    switch (true) {
      case window.innerWidth <= Screens.Mobile:
        setScreenSize(Screens.Mobile);
        break;
      case window.innerWidth <= Screens.Small:
        setScreenSize(Screens.Small);
        break;
      case window.innerWidth <= Screens.TabletPortrait:
        setScreenSize(Screens.TabletPortrait);
        break;
      case window.innerWidth <= Screens.TabletLandscape:
        setScreenSize(Screens.TabletLandscape);
        break;
      case window.innerWidth <= Screens.Desktop:
        setScreenSize(Screens.Desktop);
        break;
      case window.innerWidth <= Screens.BigDesktop:
        setScreenSize(Screens.BigDesktop);
        break;
      default:
        break;
    }
  }, [setScreenSize]);

  useEffect(() => {
    screenSizeListener();
    window.addEventListener("resize", screenSizeListener);

    return () => {
      window.removeEventListener("resize", screenSizeListener);
    };
  }, []);

  return null;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setScreenSize: bindActionCreators(setScreenSize, dispatch),
  };
};

const connector = connect(undefined, mapDispatchToProps);

export const ScreenSizeListener = connector(ScreenSizeListenerComponent);
