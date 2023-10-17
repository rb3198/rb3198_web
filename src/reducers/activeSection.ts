import { SET_ACTIVE_SECTION } from "rb3198/action_types";
import { Sections } from "rb3198/types/enum/Sections";
import { Reducer, AnyAction } from "redux";

type SectionAction = AnyAction & {
    value: Sections,
}
export const activeSection: Reducer<Sections, SectionAction> = (state = Sections.Hello, action) => {
    switch (action.type) {
        case SET_ACTIVE_SECTION:
            return action.value;
        default:
            return state;
    }
};