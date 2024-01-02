import { Reducer } from "redux";
import { ScreenSizeAction } from "rb3198/types/ScreenSizeAction";
import { SET_SCREEN_SIZE } from "rb3198/action_types";
import { Screens } from "rb3198/types/enum/Screens";

export const screenSize: Reducer<Screens, ScreenSizeAction> = (
  state = Screens.Desktop,
  action
) => {
  switch (action.type) {
    case SET_SCREEN_SIZE:
      return action.value;
    default:
      return state;
  }
};
