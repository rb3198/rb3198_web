import { Action } from "redux";
import { Screens } from "./enum/Screens";
import { ScreenSizeActionTypes } from "rb3198/action_types";

export interface ScreenSizeAction extends Action<ScreenSizeActionTypes> {
  value: Screens;
}
