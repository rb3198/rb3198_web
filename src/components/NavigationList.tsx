import React from "react";
import styles from "rb3198/styles/scss/navigation_list.scss";
import { Sections } from "rb3198/types/enum/Sections";
import { HashLink } from "react-router-hash-link";
import resume from "../../assets/pdf/ronit_bhatia_resume.pdf";

interface NavigationListProps {
  activeSection: Sections;
  navigate: React.MouseEventHandler<HTMLAnchorElement>;
}

const OPTIONS: Sections[] = Object.values(Sections);

export const NavigationList: React.FC<NavigationListProps> = ({
  activeSection,
  navigate,
}) => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {OPTIONS.map((option) => {
          return (
            <li key={`#${option}`}>
              <HashLink
                to={`#${option}`}
                data-section={option}
                onClick={navigate}
                data-selected={option === activeSection}
              >
                {option}
              </HashLink>
            </li>
          );
        })}
        <li>
          <a href={resume} download={"Ronit_Bhatia_Resume"} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
