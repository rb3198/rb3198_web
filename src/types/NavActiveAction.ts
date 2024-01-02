import { Action } from "redux";

export interface NavActiveAction extends Action {
  type: "SET_NAV_ACTIVE";
  value: boolean;
}
