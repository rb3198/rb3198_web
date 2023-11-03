import { MAX_SUBJECT_LENGTH } from "rb3198/constants/validation";
import { ValidationResponse } from "rb3198/types/ValidationResponse";

type ValidationFunction = (x: string) => ValidationResponse;

export const validateName: ValidationFunction = (name: string) => {
  const isValid = /^[a-z ,.'-]+$/i.test(name);
  return {
    isValid,
    message: isValid ? "" : "Please enter a valid alphanumeric name.",
  };
};

export const validateEmail: ValidationFunction = (email: string) => {
  const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  return {
    isValid,
    message: isValid ? "" : "Please enter a valid email address.",
  };
};

export const validateSubject: ValidationFunction = (subject: string) => {
  const isValid = subject.length <= MAX_SUBJECT_LENGTH;
  return {
    isValid,
    message: isValid
      ? ""
      : "Please enter a valid subject, upto 100 characters.",
  };
};

export const validateMessage: ValidationFunction = (message: string) => {
  const isValid = message.length > 0;
  return {
    isValid,
    message: isValid ? "" : "Message cannot be blank",
  };
};
