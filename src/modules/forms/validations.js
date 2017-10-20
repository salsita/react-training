import { validate as validateEmail } from "email-validator";

export const isEmail = value =>
  !Boolean(value) || validateEmail(value)
    ? undefined
    : "Invalid e-mail address";

export const notEmpty = value =>
  !Boolean(value) || (value && value.trim() === "")
    ? "Value can't be empty"
    : undefined;
