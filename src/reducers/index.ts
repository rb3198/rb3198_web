import { combineReducers } from "redux";
import { activeSection } from "rb3198/reducers/activeSection";
import { screenSize } from "rb3198/reducers/screenSize";

export const rootReducer = combineReducers({
  activeSection,
  screenSize,
});

export type RootReducer = ReturnType<typeof rootReducer>;
