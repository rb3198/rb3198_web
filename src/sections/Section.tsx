import React, { PropsWithChildren, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import styles from "rb3198/styles/scss/sections/section.scss";
import { Dispatch, bindActionCreators } from "redux";
import { setActiveSection } from "rb3198/action_creators";
import { connect, ConnectedProps } from "react-redux";
import { Sections } from "rb3198/types/enum/Sections";
import { HashLink } from "react-router-hash-link";
import { fireImpTracking } from "rb3198/utils/tracking";

interface SectionProps {
  id: Sections;
  alwaysVisible?: boolean;
  title?: string;
  classes?: string;
  /**
   * Callback fired upon the section entering the viewport
   */
  onEnter?: () => unknown;
  /**
   * Callback fired upon the section exiting the viewport
   */
  onExit?: () => unknown;
}

type ReduxProps = ConnectedProps<typeof connector>;
const SectionComponent: React.FC<
  PropsWithChildren<SectionProps> & ReduxProps
> = ({
  id,
  title,
  classes,
  children,
  alwaysVisible,
  setActiveSection,
  onEnter,
  onExit,
}) => {
  const [visible, setVisible] = useState(alwaysVisible || false);
  const [impTrackingFired, setImpTrackingFired] = useState(false);
  const handleChange = (isInViewport: boolean) => {
    isInViewport && setActiveSection(id);
  };

  const onInnerChange = (isInViewport: boolean) => {
    if (isInViewport) {
      setVisible(true);
      onEnter && onEnter();
      if (!impTrackingFired) {
        fireImpTracking("SectionImpression", "Viewed", id);
        setImpTrackingFired(true);
      }
      return;
    }
    onExit && onExit();
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
