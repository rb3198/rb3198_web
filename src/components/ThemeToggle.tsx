import React, { useCallback, useState } from "react";
import styles from "../styles/scss/theme_toggle.scss";
import { ThemedProps } from "rb3198/types/interfaces/ThemedProps";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Theme } from "rb3198/types/enum/Theme";
import { Track } from "./Track";

interface ThemeToggleProps extends ThemedProps {}

const getIcon = (theme?: Theme) =>
  theme === Theme.Dark ? <BsMoonStars /> : <BsSun />;

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  toggleTheme,
}) => {
  const [activeIcon, setActiveIcon] = useState<JSX.Element>(getIcon(theme));
  const handleToggleClick = useCallback(() => {
    toggleTheme && toggleTheme();
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setTimeout(() => {
      setActiveIcon(getIcon(newTheme));
    }, 200);
  }, [theme, toggleTheme]);
  return (
    <Track
      trackClick
      cat="button_clicks"
      act="theme_toggle"
      lab={`to_${theme === Theme.Dark ? Theme.Light : Theme.Dark}`}
      as="div"
      className={styles.container}
      onClick={handleToggleClick}
    >
      <div className={styles.toggle} data-theme={theme?.toString()}>
        <div />
      </div>
      <IconContext.Provider
        value={{
          className: styles.iconContainer,
          // @ts-ignore
          attr: { "data-theme": theme?.toString() },
        }}
      >
        {activeIcon}
      </IconContext.Provider>
    </Track>
  );
};
