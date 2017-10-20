import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";

import FormField from "modules/forms/components/form-field";
import * as Validations from "modules/forms/validations";

export const USER_FORM_NAME = "user-form";

const UserForm = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>First Name</label>
    <FormField
      name="firstName"
      type="text"
      placeholder="John"
      validate={Validations.notEmpty}
    />
    <label>Last Name</label>
    <FormField
      name="lastName"
      type="text"
      placeholder="Doe"
      validate={Validations.notEmpty}
    />
    <label>E-mail</label>
    <FormField
      name="email"
      type="text"
      placeholder="email@email.com"
      validate={[Validations.notEmpty, Validations.isEmail]}
    />
    <button>Save</button>
  </form>
);

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: USER_FORM_NAME,
  enableReinitialize: true
})(UserForm);
