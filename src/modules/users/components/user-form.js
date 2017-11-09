import React from "react";
import PropTypes from "prop-types";
import { reduxForm, FieldArray } from "redux-form";
import { connect } from "react-redux";

import FormField from "modules/forms/components/form-field";
import FormFieldSelect from "modules/forms/components/form-field-select";
import * as Validations from "modules/forms/validations";
import { getSkills } from "modules/crud/crud-selectors";

import styled from "styled-components";
import { Button, Title, MessageError } from "./../../../styles";

const Form = styled.form`
  width: 800px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 3px;
`;

const Label = styled.label`
  font-family: Arial, "sans-serif";
  font-size: 13px;
  color: #aaaaaa;
`;

const StyledList = styled.ul`
  font-family: Arial, "sans-serif";
  padding: 0;
  margin: 0;
  list-style: none;
`;

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
    <Title>Skills</Title>
    {(submitFailed || dirty) && error && <MessageError>{error}</MessageError>}
    <StyledList>
      {fields.map((name, index) => (
        <li key={index}>
          <FormFieldSelect
            name={`${name}.skill`}
            options={skills}
            valueKey="id"
            labelKey="skill"
            validate={validateSkillNotEmpty}
          />
          <Button type="button" onClick={() => fields.push({})}>
            Add skill
          </Button>
        </li>
      ))}
    </StyledList>
    <Button type="button" onClick={() => fields.push({})}>
      Add skill
    </Button>
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
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Label>First Name</Label>
    <FormField
      name="firstName"
      type="text"
      placeholder="John"
      validate={validateNotEmptyFirstName}
    />
    <Label>Last Name</Label>
    <FormField
      name="lastName"
      type="text"
      placeholder="Doe"
      validate={validateNotEmptyLastName}
    />
    <Label>E-mail</Label>
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
    <Button>Save</Button>
  </Form>
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
