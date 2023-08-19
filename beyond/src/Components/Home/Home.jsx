import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home position-relative">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-md-5 col-xl-6 me-xl-5"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="home__image">
              <img className="w-100" src="src/assets/home.png" alt="" />
            </div>
          </div>
          <div
            className="col-md-5"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <div className="home__text text-white ">
              <div className="home__text__content">
                <h4>The place</h4>
                <h2>we call home</h2>
              </div>
              <div className="home__text__Description my-5">
                <p>
                  Makadi Heights is a town built over 3.4 million square meters
                  planned for development, with an elevation reaching 78 meters
                  above sea level guaranteeing magnificent panoramic sea views
                  residential units. Envisioned as a comprehensive town.
                </p>
              </div>
              <div className="home__text__btns d-lg-flex align-items-center">
                <button>Download Brochure</button>
                <button>Show Master plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
