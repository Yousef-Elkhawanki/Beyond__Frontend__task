import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero ">
      <div className="container position-relative">
        <div className="row g-3 py-5 ">
          <div className="col-md-6">
            <div className="hero__container__img">
              <img
                className="w-100"
                src="https://s3-alpha-sig.figma.com/img/0170/7a2f/cb306e441ce4f545715306f8e51ac6d1?Expires=1691971200&Signature=GJMsPL68hSt3-a93qXmB5ju-f76y5U5zIu9-YzCbzVdmPWK9quL~p0dNdIVXZ-lF2PIUfQNkdLi-PCOsltXUExuXK8BApq18xrlez9--~xKKooxv3MiTJBQQcEojhnbi6O~ERwSIu5t9bgikrtRvWX9sW75HXYgN0LCwxkZwH5ArD5wYVxH7oKdZJ-K~na~hZJ49qdLqmW5Y0eTaUIRMqu0KMyvq9Ddb5nOVNrZVo4hprOCltUCV-udV9OXGNupD6dTKybHdT0XuBJJJzi9bdISjgzRVYlJILlyw6AwCFE-PQE8f-BOTgBX3-GJe-Ml5fvBCbvI4xK84hLcs1CvBYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
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
