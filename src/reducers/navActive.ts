import { NavActiveAction } from "rb3198/types/NavActiveAction";
import { Reducer } from "redux";

export const navActive: Reducer<boolean, NavActiveAction> = (
  state = false,
  action
) => {
  switch (action.type) {
    case "SET_NAV_ACTIVE":
      return action.value;
    default:
      return state;
  }
};
