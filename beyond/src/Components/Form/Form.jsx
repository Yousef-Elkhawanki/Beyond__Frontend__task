import React from "react";
import "./Form.css";
import { FormikContainer } from "./FormikContainer";
export const Form = () => {
  return (
    <section className="bookNow overflow-hidden">
      <div className="container-sm container">
        <div className="row g-md-3 ">
          <div
            className="col-md-5 mt-0 p-0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="image">
              <div className="image__text">
                <h4>Ready for a Home at </h4>
                <h2>Makadi Heights</h2>
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="bookNow__form px-3 py-5 ">
              <div className="bookNow__header">
                <p>
                  Enter your details and our representative will get back to you
                  shortly
                </p>
              </div>
              <FormikContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
