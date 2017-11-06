import React from "react";
import PropTypes from "prop-types";
import { reduxForm, FieldArray } from "redux-form";
import { connect } from "react-redux";

import FormField from "modules/forms/components/form-field";
import FormFieldSelect from "modules/forms/components/form-field-select";
import * as Validations from "modules/forms/validations";
import { getSkills } from "modules/crud/crud-selectors";

export const USER_FORM_NAME = "user-form";

const validateSkillNotEmpty = Validations.notEmptyObject("Skill is required");
const validateNotEmptyFirstName = Validations.notEmptyString(
  "First Name is required"
);
const validateNotEmptyLastName = Validations.notEmptyString(
  "Last Name is required"
);
const validateEmailNotEmpty = Validations.notEmptyString("E-mail is required");

const Skills = ({ skills, fields, meta: { error, submitFailed, dirty } }) => (
  <div>
    <h2>Skills</h2>
    {(submitFailed || dirty) && error && <div>{error}</div>}
    <ul>
      {fields.map((name, index) => (
        <li key={index}>
          <FormFieldSelect
            name={`${name}.skill`}
            options={skills}
            valueKey="id"
            labelKey="skill"
            validate={validateSkillNotEmpty}
          />
          <button type="button" onClick={() => fields.remove(index)}>
            x
          </button>
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => fields.push({})}>
      Add skill
    </button>
  </div>
);

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
  fields: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    submitFailed: PropTypes.bool,
    dirty: PropTypes.bool
  }).isRequired
};

const UserForm = ({ handleSubmit, skills, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>First Name</label>
    <FormField
      name="firstName"
      type="text"
      placeholder="John"
      validate={validateNotEmptyFirstName}
    />
    <label>Last Name</label>
    <FormField
      name="lastName"
      type="text"
      placeholder="Doe"
      validate={validateNotEmptyLastName}
    />
    <label>E-mail</label>
    <FormField
      name="email"
      type="text"
      placeholder="email@email.com"
      validate={[validateEmailNotEmpty, Validations.isEmail]}
    />
    <FieldArray
      name="skills"
      component={Skills}
      skills={skills}
      validate={[Validations.notEmptySkills, Validations.allSkillsUnique]}
    />
    <button>Save</button>
  </form>
);

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  skills: getSkills(state)
});

export default reduxForm({
  form: USER_FORM_NAME,
  enableReinitialize: true
})(connect(mapStateToProps)(UserForm));
