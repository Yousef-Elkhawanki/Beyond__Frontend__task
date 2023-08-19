import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Navbar.css";
import { useQuery } from "react-query";
import axios from "axios";

export const Navbar = ({ toggleNavbar }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [weatherData, setWeaterData] = useState();
  useQuery("weather", async () => {
    let { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
    );
    setWeaterData(data);
  });

  return (
    <nav
      className={`navbar py-2 ${
        toggleNavbar ? "active__navbar" : "bg-transparent"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-centers">
        <div className="navbar__logo" style={{ width: "8rem" }}>
          <img className="w-100" src="src/assets/logo.png" alt="" />
        </div>
        <ul className="navbar__menu d-flex align-items-center">
          <li className="navbar__menu__weather d-flex align-items-center">
            <img
              src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <circle cx="2.5" cy="2.5" r="2" stroke="white" />
            </svg>
            <span className="fw-bold me-2">
              {Math.floor(weatherData?.main.temp - 273)}
            </span>
          </li>
          <li className="navbar__menu__callIcon d-flex justify-content-center align-items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 52 52"
              fill="none"
            >
              <circle cx="26" cy="26" r="25" stroke="white" strokeWidth="1.5" />
              <path
                d="M33.12 28.1394C32.0267 28.1394 30.9689 27.9633 29.9822 27.6462C29.6711 27.5406 29.3244 27.6198 29.0844 27.8576L27.6889 29.5924C25.1733 28.4036 22.8178 26.158 21.5644 23.5778L23.2978 22.1159C23.5378 21.8694 23.6089 21.5259 23.5111 21.2177C23.1822 20.2402 23.0133 19.1923 23.0133 18.1091C23.0133 17.6336 22.6133 17.2373 22.1333 17.2373H19.0578C18.5778 17.2373 18 17.4487 18 18.1091C18 26.2901 24.8711 33.0885 33.12 33.0885C33.7511 33.0885 34 32.5337 34 32.0493V29.0112C34 28.5357 33.6 28.1394 33.12 28.1394Z"
                fill="white"
              />
            </svg>
          </li>
          <li className="navbar__menu__bookBtn">
            <button>Book now</button>
          </li>
          <li
            onClick={() => setShowMenu(true)}
            className="navbar__menu__barIcon d-flex align-items-center justify-content-end"
          >
            <span>menu</span>
            <div className="navbar__menu__barIcon__bar">
              <div className="toggle__navbar"></div>
              <div></div>
              <div className="toggle__navbar"></div>
            </div>
          </li>
        </ul>
        <div className={`custome__menu ${showMenu ? "showMenu" : ""}`}>
          <div className="close__menu">
            <AiOutlineCloseCircle onClick={() => setShowMenu(false)} />
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="navbar__menu__bookBtn">
              <button>Book now</button>
            </li>
            <li className="navbar__menu__weather d-flex align-items-center">
              <img
                src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              >
                <circle cx="2.5" cy="2.5" r="2" stroke="white" />
              </svg>
              <span className="fw-bold me-2">
                {Math.floor(weatherData?.main.temp - 273)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
