import React, { useMemo } from "react";
import styles from "../styles/scss/sections/footer.scss";
import { HashLink } from "react-router-hash-link";
import { REPO_LINK } from "rb3198/constants";
import { Track } from "rb3198/components/Track";

export const Footer: React.FC = () => {
  const Navigator = useMemo(() => {
    return (
      <nav>
        <ul id={styles.navigator}>
          <HashLink to={`#hello`}>
            <li>About</li>
          </HashLink>
          <HashLink to="#work">
            <li>Work</li>
          </HashLink>
          <HashLink to="#skills">
            <li>Skills</li>
          </HashLink>
          <HashLink to="#experience">
            <li>Experience</li>
          </HashLink>
          <HashLink to="#contact">
            <li>Contact</li>
          </HashLink>
        </ul>
      </nav>
    );
  }, []);
  return (
    <Track
      as="div"
      cat="SectionImpression"
      act="Viewed"
      lab="footer"
      trackImp
      id={styles.footer}
    >
      <div id={styles.summary}>
        <h3>Ronit Bhatia</h3>
        {Navigator}
      </div>
      <p className={styles.info}>
        Site code <b>open sourced</b> on{" "}
        <Track
          as="a"
          trackClick
          cat="link_clicks"
          act="out_link"
          lab="footer_repo_link"
          href={REPO_LINK}
          target="_blank"
          id={styles.repo_link}
        >
          Github
        </Track>
        .<br />© Ronit Bhatia. All rights reserved.
      </p>
      <p></p>
    </Track>
  );
};
