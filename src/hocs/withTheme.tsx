import { Theme } from "rb3198/types/enum/Theme";
import { useState } from "react";
import Cookies from "js-cookie";
import { THEME_COOKIE } from "rb3198/constants/cookies";

interface WithThemeProps {}

/**
 * Function to get default theme (dark / light) set in the browser.
 */
const getDefaultTheme = () => {
  const storedTheme = Cookies.get(THEME_COOKIE);
  if (storedTheme) {
    return parseInt(storedTheme) as Theme;
  }
  if (window.matchMedia("(prefers-color-scheme:dark").matches) {
    Cookies.set(THEME_COOKIE, Theme.Dark.toString());
    return Theme.Dark;
  }
  Cookies.set(THEME_COOKIE, Theme.Light.toString());
  return Theme.Light;
};

/**
 * Higher Order Component to add themed container to the app.
 * @param Component
 * @returns
 */
export const withTheme = <P extends Object>(
  Component: React.ComponentType<P>
) => {
  const WithTheme: React.FC<P & WithThemeProps> = (props) => {
    const [theme, setTheme] = useState(getDefaultTheme());

    const toggleTheme = () => {
      const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
      Cookies.set(THEME_COOKIE, newTheme.toString());
      setTheme(newTheme);
    };

    return (
      <div className={theme === Theme.Dark ? "theme--dark" : "theme--light"}>
        <Component {...props} toggleTheme={toggleTheme} theme={theme} />
      </div>
    );
  };
  return WithTheme;
};
