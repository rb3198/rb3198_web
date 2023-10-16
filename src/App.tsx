import React from "react";
import { withTheme } from "./hocs/withTheme";
import { Header } from "./components/Header";
import { HelloSection } from "./sections/HelloSection";
import { ThemedProps } from "./types/interfaces/ThemedProps";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { WorkSection } from "./sections/WorkSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

interface AppProps extends ThemedProps {}

const App: React.FC<AppProps> = (props) => {
  const { theme, toggleTheme } = props;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <HelloSection />
                <ExpertiseSection />
                <WorkSection />
                <ExperienceSection />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withTheme(App);
