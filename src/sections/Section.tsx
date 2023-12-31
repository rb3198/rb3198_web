import React, { PropsWithChildren } from "react";
import { InView } from "react-intersection-observer";
import styles from "rb3198/styles/scss/sections/section.scss";
import { Dispatch, bindActionCreators } from "redux";
import { setActiveSection } from "rb3198/action_creators";
import { connect, ConnectedProps } from "react-redux";
import { Sections } from "rb3198/types/enum/Sections";
import { HashLink } from "react-router-hash-link";

interface SectionProps {
  id: Sections;
  title?: string;
  classes?: string;
}

type ReduxProps = ConnectedProps<typeof connector>;
const SectionComponent: React.FC<
  PropsWithChildren<SectionProps> & ReduxProps
> = ({ id, title, classes, children, setActiveSection }) => {
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
      {title && (
        <HashLink to={`#${id.toString()}`} className={styles.title}>
          <h1>{title}</h1>
        </HashLink>
      )}
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
