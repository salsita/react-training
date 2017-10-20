import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";

/**
 * Field adapter to be used for any
 * redux-form field. It adds validation
 * messages. As well as it defines a template
 * of any field.
 */
const FieldAdapter = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

FieldAdapter.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }).isRequired
};

const FormField = props => <Field component={FieldAdapter} {...props} />;

export default FormField;
