import { AnyAction } from "redux";
import { HeaderOption } from "./enum/HeaderOption";

export type SectionAction = AnyAction & {
    value: HeaderOption,
}