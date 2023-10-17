import { AnyAction } from "redux";
import { Sections } from "./enum/Sections";

export type SectionAction = AnyAction & {
    value: Sections,
}