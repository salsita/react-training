import { validate as validateEmail } from "email-validator";

export const isEmail = value =>
  !Boolean(value) || validateEmail(value)
    ? undefined
    : "Invalid e-mail address";

export const notEmptyString = message => value =>
  !Boolean(value) || (value && value.trim() === "") ? message : undefined;

export const notEmptyObject = message => value =>
  !Boolean(value) ? message : undefined;

export const allSkillsUnique = skills => {
  if (!skills) {
    return undefined;
  }

  const justSkills = skills.map(({ skill }) => skill);

  return new Set(justSkills).size === justSkills.length
    ? undefined
    : "Skills must be unique";
};

export const notEmptySkills = skills =>
  skills && skills.length > 0 ? undefined : "Please, select at least one skill";
