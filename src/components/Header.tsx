import React from "react";
import styles from "rb3198/styles/scss/header.scss";
import { HeaderNavigation } from "./HeaderNavigation";
import { ThemeToggle } from "./ThemeToggle";
import { ThemedProps } from "rb3198/types/interfaces/ThemedProps";

interface HeaderProps extends ThemedProps {}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>RB</h1>
      <div className={styles.navAndToggleContainer}>
        <HeaderNavigation />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};
