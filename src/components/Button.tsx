import React, { useCallback } from "react";
import styles from "rb3198/styles/scss/button.scss";
import { getDomValidProps } from "rb3198/utils";
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  containerClasses?: string;
  disabled?: boolean;
  size?: "s" | "m" | "l" | "xl";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { containerClasses, children, size = "m", disabled = false } = props;
  const domProps = getDomValidProps(props);
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
