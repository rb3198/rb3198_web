import { SET_ACTIVE_SECTION } from "rb3198/action_types";
import { SectionAction } from "rb3198/types/SectionAction";
import { Sections } from "rb3198/types/enum/Sections";
import { ActionCreator } from "redux";

export const setActiveSection: ActionCreator<SectionAction> = (newSection: Sections) => {
    return {
        type: SET_ACTIVE_SECTION,
        value: newSection,
    }
};