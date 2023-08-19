import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero ">
      <div className="container position-relative">
        <div className="row g-3 py-5 ">
          <div
            className="col-md-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="hero__container__img">
              <img className="w-100" src="src/assets/home.png" alt="" />
            </div>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="hero__container__content">
              <div className="hero__container__content__text">
                <h5>The place</h5>
                <h2>we call home</h2>
                <p>
                  Makadi Heights is a town built over 3.4 million square meters
                  planned for development, with an elevation reaching 78 meters
                  above sea level guaranteeing magnificent panoramic sea views
                  residential units. Envisioned as a comprehensive town.
                </p>
              </div>
              <div className="hero__container__content__btns">
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
