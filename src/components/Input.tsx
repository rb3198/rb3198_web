import styles from "rb3198/styles/scss/input.scss";

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
  return (
    <div className={`${containerClasses || ""} ${styles.inputContainer}`}>
      <input
        {...props}
        className={`${styles.input} ${className}`}
        data-isValid={isValid}
        data-isMessageShown={!!message}
      ></input>
      {message && (
        <p data-isValid={isValid} className={styles.message}>
          {message}
        </p>
      )}
    </div>
  );
};
