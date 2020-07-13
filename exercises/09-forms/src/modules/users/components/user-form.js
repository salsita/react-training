import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, FieldArray } from 'redux-form';
import { connect } from 'react-redux';

import {
  FormField,
  FormFieldSelect,
  FormValidations
} from '@salsita/react-forms';

import * as UserValidations from 'modules/forms/validations';
import { getSkills } from 'modules/crud/crud-selectors';

export const USER_FORM_NAME = 'user-form';

const validateSkillNotEmpty = FormValidations.notEmptyObject(
  'Skill is required'
);
const validateNotEmptyFirstName = FormValidations.notEmptyString(
  'First Name is required'
);
const validateNotEmptyLastName = FormValidations.notEmptyString(
  'Last Name is required'
);

const Skills = ({ skills, fields, meta: { error, submitFailed, dirty } }) => (
  <div>
    <h2>Skills</h2>
    {(submitFailed || dirty) && error && <div>{error}</div>}
    <ul>
      {fields.map((name, index) => (
        <li key={index}>
          Skill
          <FormFieldSelect
            name={`${name}.skill`}
            options={skills}
            valueKey="id"
            labelKey="name"
            validate={validateSkillNotEmpty}
          />
          Level
          <FormField name={`${name}.level`} type="number" />
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
    <FormField
      name="firstName"
      type="text"
      label="First Name"
      placeholder="John"
      validate={validateNotEmptyFirstName}
    />
    <FormField
      name="lastName"
      type="text"
      label="Last Name"
      placeholder="Doe"
      validate={validateNotEmptyLastName}
    />
    <FieldArray
      name="skills"
      component={Skills}
      skills={skills}
      validate={[
        UserValidations.notEmptySkills,
        UserValidations.allSkillsUnique
      ]}
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
