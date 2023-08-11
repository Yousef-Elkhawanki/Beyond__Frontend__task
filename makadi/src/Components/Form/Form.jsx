import React, { useState } from "react";
import "./Form.css";
import handle_form from "../../schema/schema";
export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    bugdet: "",
    message: "",
  });

  const [errorList, setErrorList] = useState([]);
  const [alert, setAlert] = useState(false);

  function get_data_from_form(e) {
    let newData = { ...userData };
    newData[e.target.name] = e.target.value;
    setUserData(newData);
  }

  function submit_form(e) {
    e.preventDefault();
    let validate = handle_form(userData);
    if (validate.error) {
      setErrorList(validate.error.details);
    } else {
      setErrorList([]);
      setAlert("Thanks");
      show_alert();
      setAlert(true);
    }
  }

  function show_alert() {
    setInterval(() => {
      setAlert(false);
    }, 4000);
  }

  return (
    <section className="booking__form">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="booking__form__img position-relative">
              <div className="booking__form__img__text">
                <h3>Makadi Heights</h3>
                <h6>Ready for a Home at </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="booking__form__container py-5 position-relative">
              <div className="booking__gorm__container__description">
                <p>
                  Enter your details and our representative <br /> will get back
                  to you shortly
                </p>
              </div>

              {errorList.length > 0
                ? errorList.map((err, index) => {
                    if (err.context.label === "phone") {
                      return (
                        <div
                          key={index}
                          className="toast align-items-center text-white bg-danger border-0 mb-2"
                          role="alert"
                          aria-live="assertive"
                          aria-atomic="true"
                        >
                          <div className="d-flex">
                            <div className="toast-body">Number Invalid..</div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index}
                          className="toast align-items-center text-white bg-danger border-0 mb-2"
                          role="alert"
                          aria-live="assertive"
                          aria-atomic="true"
                        >
                          <div className="d-flex">
                            <div className="toast-body">{err.message}</div>
                          </div>
                        </div>
                      );
                    }
                  })
                : ""}
              {alert ? (
                <div
                  className="toast toast__success align-items-center text-white bg-success border-0 mb-2"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="d-flex">
                    <div className="toast-body"> Thanks</div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <form onSubmit={submit_form}>
                <div className="booking__form__group">
                  <input
                    onChange={get_data_from_form}
                    type="text"
                    name="name"
                    id="name"
                    className="form"
                    placeholder="Your name"
                  />
                </div>
                <div className="booking__form__group">
                  <input
                    onChange={get_data_from_form}
                    type="email"
                    name="email"
                    id="email"
                    className="form"
                    placeholder="Email ID"
                  />
                </div>
                <div className="booking__form__group">
                  <input
                    onChange={get_data_from_form}
                    type="number"
                    name="phone"
                    id="phone"
                    className="form"
                    placeholder="Phone number"
                  />
                </div>
                <div className="booking__form__group">
                  <select
                    onChange={get_data_from_form}
                    name="bugdet"
                    id=""
                    className="form"
                  >
                    <option hidden>Choose your bugdet</option>
                    <option value="0">1000$</option>
                    <option value="1">2000$</option>
                    <option value="2">3000$</option>
                  </select>
                </div>
                <div className="booking__form__group">
                  <input
                    onChange={get_data_from_form}
                    type="text"
                    name="message"
                    id="message"
                    className="form"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="booking__form__group__policy d-flex align-items-center justify-content-start">
                  <input type="checkbox" name="policy" id="policy" />
                  <label htmlFor="policy">
                    I agree to the processing of personal data
                  </label>
                </div>
                <div className="booking__form__group__submit">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    value="leave a Call request"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
