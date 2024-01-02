import { combineReducers } from "redux";
import { activeSection } from "rb3198/reducers/activeSection";
import { screenSize } from "rb3198/reducers/screenSize";
import { navActive } from "rb3198/reducers/navActive";

export const rootReducer = combineReducers({
  activeSection,
  screenSize,
  navActive,
});

export type RootReducer = ReturnType<typeof rootReducer>;
