import React from "react";
import { withTheme } from "./hocs/withTheme";
import { Header } from "./components/Header";
import { HelloSection } from "./sections/HelloSection";
import { ThemedProps } from "./types/interfaces/ThemedProps";
import { SkillsSection } from "./sections/SkillsSection";
import { WorkSection } from "./sections/WorkSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";

interface AppProps extends ThemedProps {}

const store = createStore(rootReducer);

const App: React.FC<AppProps> = (props) => {
  const { theme, toggleTheme } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <HelloSection />
                {false && <SkillsSection />}
                {false && <WorkSection />}
                {false && <ExperienceSection />}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default withTheme(App);
