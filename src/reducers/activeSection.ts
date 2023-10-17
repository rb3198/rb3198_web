import { SET_ACTIVE_SECTION } from "rb3198/action_types";
import { HeaderOption } from "rb3198/types/enum/HeaderOption";
import { Reducer, AnyAction } from "redux";

type SectionAction = AnyAction & {
    value: HeaderOption,
}
export const activeSection: Reducer<HeaderOption, SectionAction> = (state = HeaderOption.Hello, action) => {
    switch (action.type) {
        case SET_ACTIVE_SECTION:
            return action.value;
        default:
            return state;
    }
};