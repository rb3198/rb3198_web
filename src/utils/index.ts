import { FORBIDDEN_DOM_KEYS } from "rb3198/constants";
import { WorkType } from "rb3198/types/enum/WorkType";
import { IconType } from "react-icons";
import { HiAcademicCap } from "react-icons/hi2";
import { MdCorporateFare } from "react-icons/md";

export const getDomValidProps = (
  props: { [key: string]: any },
  additionalForbiddenKeys?: string[]
) => {
  const forbiddenKeys = [
    ...FORBIDDEN_DOM_KEYS,
    ...(additionalForbiddenKeys || []),
  ];
  return Object.keys(props)
    .filter((key) => !forbiddenKeys.includes(key))
    .reduce((obj: { [key: string]: any }, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
};

export const getWorkTypeIcon = (type: WorkType): IconType => {
  switch (type) {
    case WorkType.Personal:
      return HiAcademicCap;
    case WorkType.Professional:
    default:
      return MdCorporateFare;
  }
};
