import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";

import styled from "styled-components";
import { colors, space, MessageError, MessageWarning } from "./../../../styles";

const FormItem = styled.div`
  margin-bottom: ${space[2]};
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.lightgrey};
  box-sizing: border-box;
  color: ${colors.black};
  display: inline-block;
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  outline: none;
  padding: 0px;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    border-bottom-color: ${colors.black};
  }
  &:focus {
    border-bottom-color: ${colors.blue};
    box-shadow: 0 1px 0 0 ${colors.blue};
  }
`;

/**
 * Field adapter to be used for any
 * redux-form field. It adds validation
 * messages. As well as it defines a template
 * of any field.
 */
export const FieldAdapter = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <FormItem>
    <label>{label}</label>
    <div>
      <StyledInput {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <MessageError>{error}</MessageError>) ||
          (warning && <MessageWarning>{warning}</MessageWarning>))}
    </div>
  </FormItem>
);

FieldAdapter.propTypes = {
  input: PropTypes.object.isRequired,
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
