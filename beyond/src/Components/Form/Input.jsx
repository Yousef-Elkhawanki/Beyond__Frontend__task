import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import { TextError } from "./TextError";

export const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form__group">
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError}/>
    </div>
  );
};
