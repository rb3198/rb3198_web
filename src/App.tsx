import React, { useCallback, useEffect } from "react";
import { withTheme } from "./hocs/withTheme";
import { Header } from "./components/Header";
import { HelloSection } from "./sections/HelloSection";
import { ThemedProps } from "./types/interfaces/ThemedProps";
import { SkillsSection } from "./sections/SkillsSection";
import { WorkSection } from "./sections/WorkSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { Route, HashRouter, Routes } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
import { ScrollUp } from "./components/ScrollUp";
import { ContactSection } from "./sections/ContactSection";
import { ScreenSizeListener } from "./components/ScreenSizeListener";

interface AppProps extends ThemedProps {}

const store = createStore(rootReducer);

const App: React.FC<AppProps> = (props) => {
  const { theme, toggleTheme } = props;
  return (
    <Provider store={store}>
      <ScreenSizeListener />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <HelloSection />
                <WorkSection />
                <SkillsSection />
                <ExperienceSection />
                <ContactSection />
                <ScrollUp />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </Provider>
  );
};

export default withTheme(App);
