import { SectionAction } from "rb3198/types/SectionAction";
import { Sections } from "rb3198/types/enum/Sections";
import { Reducer, AnyAction } from "redux";

export const activeSection: Reducer<Sections, SectionAction> = (
  state = Sections.Hello,
  action
) => {
  switch (action.type) {
    case "SET_ACTIVE_SECTION":
      return action.value;
    default:
      return state;
  }
};
