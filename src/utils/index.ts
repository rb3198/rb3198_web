import { FORBIDDEN_DOM_KEYS } from "rb3198/constants";

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
