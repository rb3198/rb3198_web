import { combineReducers } from "redux";
import {activeSection} from "rb3198/reducers/activeSection";

export const rootReducer = combineReducers({
    activeSection, 
});

export type RootReducer = ReturnType<typeof rootReducer>;