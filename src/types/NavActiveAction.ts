import { NavActiveActionTypes } from "rb3198/action_types";
import { Action } from "redux";

export interface NavActiveAction extends Action<NavActiveActionTypes> {
  value: boolean;
}
