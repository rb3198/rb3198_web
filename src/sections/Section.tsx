import React, { PropsWithChildren } from "react";
import { InView } from "react-intersection-observer";
import styles from "rb3198/styles/scss/sections/section.scss";
import { Dispatch, bindActionCreators } from "redux";
import { setActiveSection } from "rb3198/action_creators";
import { connect, ConnectedProps } from "react-redux";
import { HeaderOption } from "rb3198/types/enum/HeaderOption";

interface SectionProps {
  id: HeaderOption;
  classes?: string;
}

type ReduxProps = ConnectedProps<typeof connector>;
const SectionComponent: React.FC<
  PropsWithChildren<SectionProps> & ReduxProps
> = ({ id, classes, children, setActiveSection }) => {
  const handleChange = (isInViewport: boolean) => {
    isInViewport && setActiveSection(id);
  };

  return (
    <InView
      as="section"
      id={id}
      className={`${styles.section} ${classes}`}
      onChange={handleChange}
      threshold={0.8}
    >
      {children}
    </InView>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setActiveSection: bindActionCreators(setActiveSection, dispatch),
  };
};

const connector = connect(undefined, mapDispatchToProps);

export const Section = connector(SectionComponent);
