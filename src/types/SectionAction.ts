import { Action } from "redux";
import { Sections } from "./enum/Sections";
import { ActiveSectionActionTypes } from "rb3198/action_types";

export interface SectionAction extends Action<ActiveSectionActionTypes> {
  value: Sections;
}
