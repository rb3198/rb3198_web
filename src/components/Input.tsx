import styles from "rb3198/styles/scss/input.scss";
import { getDomValidProps } from "rb3198/utils";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isValid?: boolean;
  message?: string;
  label?: string;
  containerClasses?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { className, message, isValid = true, containerClasses } = props;
  const domProps = getDomValidProps(props);
  return (
    <div className={`${containerClasses || ""} ${styles.inputContainer}`}>
      <input
        {...domProps}
        className={`${styles.input} ${className}`}
        data-is-valid={isValid}
      ></input>
      {message && (
        <p data-is-valid={isValid} className={styles.message}>
          {message}
        </p>
      )}
    </div>
  );
};
