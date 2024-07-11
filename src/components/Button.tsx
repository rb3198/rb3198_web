import React from "react";
import styles from "rb3198/styles/scss/button.scss";
import { getDomValidProps } from "rb3198/utils";
import { Track } from "./Track";
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  containerClasses?: string;
  disabled?: boolean;
  size?: "s" | "m" | "l" | "xl";
  trackClick?: boolean;
  trackImp?: boolean;
  cat?: string;
  act?: string;
  lab?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    containerClasses,
    children,
    trackClick,
    trackImp,
    cat,
    act,
    lab,
    size = "m",
    disabled = false,
  } = props;
  const domProps = getDomValidProps(props);
  return (
    <Track
      as="button"
      trackClick={trackClick}
      trackImp={trackImp}
      cat={cat || ""}
      act={act || ""}
      lab={lab || ""}
      className={`${styles.buttonContainer} ${containerClasses}`}
      {...domProps}
      data-disabled={disabled}
      data-size={size}
    >
      {children}
    </Track>
  );
};
