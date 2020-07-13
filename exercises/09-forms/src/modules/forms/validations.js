export const allSkillsUnique = skills => {
  if (!skills) {
    return undefined;
  }

  const justSkills = skills.map(({ skill }) => skill);

  return new Set(justSkills).size === justSkills.length
    ? undefined
    : 'Skills must be unique';
};

export const notEmptySkills = skills =>
  skills && skills.length > 0 ? undefined : 'Please, select at least one skill';
