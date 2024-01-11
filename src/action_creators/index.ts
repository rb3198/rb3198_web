import { NavActiveAction } from "rb3198/types/NavActiveAction";
import { ScreenSizeAction } from "rb3198/types/ScreenSizeAction";
import { SectionAction } from "rb3198/types/SectionAction";
import { Screens } from "rb3198/types/enum/Screens";
import { Sections } from "rb3198/types/enum/Sections";
import { ActionCreator } from "redux";

export const setActiveSection: ActionCreator<SectionAction> = (
  newSection: Sections
) => {
  return {
    type: "SET_ACTIVE_SECTION",
    value: newSection,
  };
};

export const setScreenSize: ActionCreator<ScreenSizeAction> = (
  value: Screens
) => {
  return {
    type: "SET_SCREEN_SIZE",
    value,
  };
};

export const setNavActive: ActionCreator<NavActiveAction> = (
  value: boolean
) => {
  const body = document.getElementsByTagName("body")[0];
  body.setAttribute("data-nav-open", String(value));
  return {
    type: "SET_NAV_ACTIVE",
    value,
  };
};
