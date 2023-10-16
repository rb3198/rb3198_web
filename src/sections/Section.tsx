import React, { PropsWithChildren } from "react";
import styles from "rb3198/styles/scss/sections/section.scss";

interface SectionProps {
  id: string;
  classes?: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  id,
  classes,
  children,
}) => {
  return (
    <section id={id} className={`${styles.section} ${classes}`}>
      {children}
    </section>
  );
};
