import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";

export const Select = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form__group">
      <Field id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
