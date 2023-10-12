import React from "react";
import { withTheme } from "./hocs/withTheme";
import { Header } from "./components/Header";
import { HelloSection } from "./sections/HelloSection";
import { ThemedProps } from "./types/interfaces/ThemedProps";

interface AppProps extends ThemedProps {}

const App: React.FC<AppProps> = (props) => {
  const { theme, toggleTheme } = props;
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <HelloSection />
    </>
  );
};

export default withTheme(App);
