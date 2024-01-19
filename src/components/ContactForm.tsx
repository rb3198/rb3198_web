import React, { useCallback, useState, useEffect } from "react";
import { Input } from "./Input";
import styles from "rb3198/styles/scss/contact_form.scss";
import { Button } from "./Button";
import { BiChevronRight } from "react-icons/bi";
import {
  validateEmail,
  validateMessage,
  validateName,
  validateSubject,
} from "rb3198/utils/validation";
import { ValidationResponse } from "rb3198/types/ValidationResponse";
import { EMAIL_HASH } from "rb3198/constants";
import { FormStage } from "rb3198/types/enum/FormStage";
import { Loader } from "./Loader";

export interface ContactFormProps {
  containerClasses?: string;
}

const initialEmailInfo = {
  name: {
    value: "",
    isValid: true,
    message: "",
  },
  email: {
    value: "",
    isValid: true,
    message: "",
  },
  subject: {
    value: "",
    isValid: true,
    message: "",
  },
  message: {
    value: "",
    isValid: true,
    message: "",
  },
};

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { containerClasses } = props;
  const [emailInfo, setEmailInfo] = useState(initialEmailInfo);
  const [formStage, setFormStage] = useState(FormStage.Unsent);

  useEffect(() => {
    // Reset form stage on info change
    setFormStage(FormStage.Unsent);
  }, [
    emailInfo.name.value,
    emailInfo.message.value,
    emailInfo.email.value,
    emailInfo.subject.value,
  ]);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback(
    (event) => {
      const { target } = event;
      const { value, name: inputName } = target;
      setEmailInfo({
        ...emailInfo,
        [inputName]: {
          ...emailInfo[inputName as keyof typeof emailInfo],
          value,
        },
      });
    },
    [emailInfo]
  );

  const handleBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback(
    (event) => {
      const { target } = event;
      const { value, name: inputName } = target;
      let validation: ValidationResponse | undefined = undefined;
      switch (inputName) {
        case "name":
          validation = validateName(value);
          break;
        case "email":
          validation = validateEmail(value);
          break;
        case "subject":
          validation = validateSubject(value);
          break;
        case "message":
          validation = validateMessage(value);
          break;
        default:
          console.error("Unhandled form field changed!");
          break;
      }
      if (!!validation) {
        setEmailInfo({
          ...emailInfo,
          [inputName]: {
            ...emailInfo[inputName as keyof typeof emailInfo],
            ...validation,
          },
        });
      }
      return validation?.isValid ?? false;
    },
    [emailInfo]
  );

  const validateForm = useCallback(() => {
    let isValid = true;
    Object.keys(emailInfo).forEach((key) => {
      // @ts-ignore
      isValid &&= handleBlur({
        // @ts-ignore
        target: { value: emailInfo[key].value, name: key },
      });
    });
    return isValid;
  }, [emailInfo]);

  const sendMessage: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    async (e) => {
      e.preventDefault();
      const { name, email, message, subject } = emailInfo;
      if (!validateForm()) {
        return;
      }
      try {
        setFormStage(FormStage.Sending);
        const response = await fetch(
          `https://formsubmit.co/ajax/${EMAIL_HASH}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name.value,
              subject: subject.value,
              from: email.value,
              message: message.value,
            }),
          }
        );
        const result = await response.json();
        if (!!result && result.success === "true") {
          setFormStage(FormStage.Sent);
        } else {
          setFormStage(FormStage.Failed);
        }
      } catch (error) {
        setFormStage(FormStage.Failed);
      }
    },
    [emailInfo, validateForm]
  );

  const renderSubmitButton = useCallback(() => {
    const { name, email, message, subject } = emailInfo;
    const renderInnerContent = () => {
      switch (formStage) {
        case FormStage.Sending:
          return <Loader classes={styles.loader} />;
        case FormStage.Sent:
          return <p>Message Sent!</p>;
        case FormStage.Failed:
          return (
            <>
              <p>Try Again</p>
              <BiChevronRight />
            </>
          );
        case FormStage.Unsent:
        default:
          return (
            <>
              <p>Send Message</p>
              <BiChevronRight />
            </>
          );
      }
    };
    return (
      <Button
        size="xl"
        data-stage={formStage}
        containerClasses={styles.submit}
        onClick={sendMessage}
        disabled={
          !name.isValid ||
          !subject.isValid ||
          !email.isValid ||
          !message.isValid ||
          formStage === FormStage.Sent
        }
      >
        {renderInnerContent()}
      </Button>
    );
  }, [emailInfo, formStage]);

  const { name, email, message, subject } = emailInfo;
  return (
    <form className={containerClasses}>
      <div className={styles.nameEmailContainer}>
        <Input
          onChange={handleChange}
          name="name"
          onBlur={handleBlur}
          placeholder="Name*"
          className={styles.inputs}
          containerClasses={styles.nameEmail}
          value={name.value}
          isValid={name.isValid}
          message={name.message}
          disabled={formStage === FormStage.Sending}
        />
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email*"
          onBlur={handleBlur}
          className={styles.inputs}
          containerClasses={styles.nameEmail}
          value={email.value}
          isValid={email.isValid}
          message={email.message}
          disabled={formStage === FormStage.Sending}
        />
      </div>
      <Input
        onChange={handleChange}
        name="subject"
        onBlur={handleBlur}
        placeholder="Subject"
        className={styles.inputs}
        value={subject.value}
        isValid={subject.isValid}
        message={subject.message}
        disabled={formStage === FormStage.Sending}
      />
      <textarea
        onChange={handleChange}
        name="message"
        onBlur={handleBlur}
        placeholder="Message*"
        className={styles.message}
        value={message.value}
        data-is-valid={message.isValid}
        disabled={formStage === FormStage.Sending}
      />
      {!message.isValid && (
        <p className={styles.messageError}>{message.message}</p>
      )}
      <input type="text" name="_honey" className={styles.honeypot}></input>
      {renderSubmitButton()}
      {formStage === FormStage.Failed && (
        <p className={styles.errorMsg}>
          Could not send message due to an error. Please try again.
        </p>
      )}
    </form>
  );
};
