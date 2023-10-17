import React from "react";
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

interface AppProps extends ThemedProps {}

const store = createStore(rootReducer);

const App: React.FC<AppProps> = (props) => {
  const { theme, toggleTheme } = props;
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <HelloSection />
                <SkillsSection />
                {false && <WorkSection />}
                {false && <ExperienceSection />}
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
