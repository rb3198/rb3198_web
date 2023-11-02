import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/git_link.scss";
import { SiGithub } from "react-icons/si";
import { IconContext } from "react-icons";
import { BiChevronRight } from "react-icons/bi";
import { Button } from "./Button";
export interface GitLinkProps {
  /**
   * Default: View Code
   */
  label?: string;
  classes?: string;
  gitLink?: string;
  isUppercase?: boolean;
}

export const GitLink: React.FC<GitLinkProps> = ({
  label,
  isUppercase,
  gitLink,
  classes,
}) => {
  const isDisabled = !gitLink;

  const redirect = useCallback(() => {
    if (!isDisabled) {
      window.open(gitLink, "_blank");
    }
  }, [isDisabled, gitLink]);
  return (
    <Button
      onClick={redirect}
      disabled={isDisabled}
      size="m"
      containerClasses={`${styles.gitLinkContainer} ${classes}`}
      data-uppercase={isUppercase}
    >
      <div className={styles.iconAndLabelContainer}>
        <IconContext.Provider
          value={{ className: styles.iconClasses, size: "14px" }}
        >
          <SiGithub />
        </IconContext.Provider>
        {label || "View Code"}
      </div>
      {!isDisabled && <BiChevronRight />}
    </Button>
  );
};
