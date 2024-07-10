import React, { PropsWithChildren, useState } from "react";
import { InView } from "react-intersection-observer";
import styles from "rb3198/styles/scss/sections/section.scss";
import { Dispatch, bindActionCreators } from "redux";
import { setActiveSection } from "rb3198/action_creators";
import { connect, ConnectedProps } from "react-redux";
import { Sections } from "rb3198/types/enum/Sections";
import { HashLink } from "react-router-hash-link";

interface SectionProps {
  id: Sections;
  alwaysVisible?: boolean;
  title?: string;
  classes?: string;
}

type ReduxProps = ConnectedProps<typeof connector>;
const SectionComponent: React.FC<
  PropsWithChildren<SectionProps> & ReduxProps
> = ({ id, title, classes, children, alwaysVisible, setActiveSection }) => {
  const [visible, setVisible] = useState(alwaysVisible);
  const handleChange = (isInViewport: boolean) => {
    isInViewport && setActiveSection(id);
  };

  const onInnerChange = (isInViewport: boolean) => {
    isInViewport && setVisible(true);
  };

  return (
    <InView as="section" id={id} onChange={handleChange} threshold={0.8}>
      <InView
        onChange={onInnerChange}
        className={`${styles.section} ${classes} ${
          (visible && styles.visibleSection) || ""
        }`}
        threshold={0.3}
      >
        {title && (
          <HashLink to={`#${id.toString()}`} className={styles.title}>
            <h1>{title}</h1>
          </HashLink>
        )}
        {children}
      </InView>
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
