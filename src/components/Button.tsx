import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/button.scss";
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  containerClasses?: string;
  disabled?: boolean;
  size?: "s" | "m" | "l" | "xl";
}

const forbiddenDomKeys = ["containerClasses", "children"];

export const Button: React.FC<ButtonProps> = (props) => {
  const initDomProps: { [key: string]: any } = {};
  const { containerClasses, children, size = "m", disabled = false } = props;
  const domProps = Object.keys(props)
    .filter((key) => !forbiddenDomKeys.includes(key))
    .reduce((obj, key) => {
      // @ts-ignore
      obj[key] = props[key];
      return obj;
    }, initDomProps);
  return (
    <button
      className={`${styles.buttonContainer} ${containerClasses}`}
      {...domProps}
      data-disabled={disabled}
      data-size={size}
    >
      {children}
    </button>
  );
};
