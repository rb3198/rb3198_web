import React, { useCallback } from "react";
import { RootReducer } from "rb3198/reducers";
import { connect, ConnectedProps } from "react-redux";
import { NavigationList } from "./NavigationList";

interface HeaderNavigationProps {}

type ReduxProps = ConnectedProps<typeof connector>;

const HeaderNavigationComponent: React.FC<
  HeaderNavigationProps & ReduxProps
> = ({ activeSection }) => {
  const navigate: React.MouseEventHandler<HTMLAnchorElement> =
    useCallback(() => {}, []);

  return <NavigationList activeSection={activeSection} navigate={navigate} />;
};

const mapStateToProps = (state: RootReducer) => {
  const { activeSection } = state;
  return {
    activeSection,
  };
};

const connector = connect(mapStateToProps);

export const HeaderNavigation = connector(HeaderNavigationComponent);
