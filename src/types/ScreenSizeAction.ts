import { AnyAction } from "redux";
import { Screens } from "./enum/Screens";

export type ScreenSizeAction = AnyAction & {
  value: Screens;
};
