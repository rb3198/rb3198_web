import { SET_ACTIVE_SECTION, SET_SCREEN_SIZE } from "rb3198/action_types";
import { ScreenSizeAction } from "rb3198/types/ScreenSizeAction";
import { SectionAction } from "rb3198/types/SectionAction";
import { Screens } from "rb3198/types/enum/Screens";
import { Sections } from "rb3198/types/enum/Sections";
import { ActionCreator } from "redux";

export const setActiveSection: ActionCreator<SectionAction> = (
  newSection: Sections
) => {
  return {
    type: SET_ACTIVE_SECTION,
    value: newSection,
  };
};

export const setScreenSize: ActionCreator<ScreenSizeAction> = (
  value: Screens
) => {
  return {
    type: SET_SCREEN_SIZE,
    value,
  };
};
