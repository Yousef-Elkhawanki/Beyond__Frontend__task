import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { FormikControl } from "./FormikControl";
import swal from "sweetalert";

export const FormikContainer = () => {
  const selectDropDown = [
    { key: "Choose Your Bugdet", value: "Choose Your Bugdet" },
    { key: "option 1", value: "500$" },
    { key: "option 2", value: "1000$" },
    { key: "option 3", value: "1500$" },
    { key: "option 4", value: "2000$" },
  ];
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    selectOptions: "",
    message: "",
  };
  const onSubmit = (values) => {
    swal("Thanks!", `${values.name}`, "success");
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Required"),
    email: Yup.string().email("Invalid Email Format !").required("Required"),
    phone: Yup.string().max(11).required("Required"),
    // selectOptions: Yup.string().required("Required"),
    message: Yup.string().min(3).required("Required"),
  });

  return (
    <div className="form__container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="name"
              name="name"
              placeholder="Your Name"
            />
            <FormikControl
              control="input"
              type="email"
              name="email"
              placeholder="Email ID"
            />
            <FormikControl
              control="input"
              type="number"
              name="phone"
              placeholder="Phone"
            />
            <div className="form__group">
              <select name="selectOptions" id="selectOptions">
                {selectDropDown.map((option) => {
                  return (
                    <option key={option.key} value={option.key}>
                      {option.value}
                    </option>
                  );
                })}
              </select>
            </div>
            <FormikControl
              control="input"
              type="text"
              name="message"
              placeholder="Enter Your Message"
            />
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="me-2"
              />
              <label htmlFor="checkbox">
                I agree to the processing of personal data
              </label>
            </div>
            <button type="submit" className="submit__btn">
              LEAVE A CALL REQUEST
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
