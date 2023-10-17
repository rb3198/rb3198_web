import { SET_ACTIVE_SECTION } from "rb3198/action_types";
import { SectionAction } from "rb3198/types/SectionAction";
import { HeaderOption } from "rb3198/types/enum/HeaderOption";
import { ActionCreator } from "redux";

export const setActiveSection: ActionCreator<SectionAction> = (newSection: HeaderOption) => {
    return {
        type: SET_ACTIVE_SECTION,
        value: newSection,
    }
};