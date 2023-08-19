import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useQuery } from "react-query";
import axios from "axios";
export const Navbar = () => {
  const [weather, setWeather] = useState();
  useQuery("weather", async () => {
    let { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
    );
    setWeather(data);
  });

  // scroll navbar
  const [changeNav, setChangeNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setChangeNav(true);
      } else {
        setChangeNav(false);
      }
    });
  });
  // toggle menu
  const [toggle, setToggle] = useState(!"toggle__menu");
  const [toggleActive, setToggleActive] = useState(false);

  function toggle_menu() {
    setToggleActive(true);
    setToggle("toggle__menu");
  }

  function deactive__menu() {
    setToggleActive(false);
  }
  return (
    <header className={changeNav ? "active" : ""}>
      <nav>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar__logo">
            <img src="src/assets/logo.png" alt="" />
          </div>
          <ul className="menu text-white d-flex align-items-center justify-content-end">
            <li>
              <img
                src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
                alt=""
              />
              <span>{Math.floor(weather?.main.temp - 273)}</span>
              <svg
                className="mb-4"
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              >
                <circle cx="2.5" cy="2.5" r="2" stroke="white" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M33.12 28.1394C32.0267 28.1394 30.9689 27.9633 29.9822 27.6462C29.6711 27.5406 29.3244 27.6198 29.0844 27.8576L27.6889 29.5924C25.1733 28.4036 22.8178 26.158 21.5644 23.5778L23.2978 22.1159C23.5378 21.8694 23.6089 21.5259 23.5111 21.2177C23.1822 20.2402 23.0133 19.1923 23.0133 18.1091C23.0133 17.6336 22.6133 17.2373 22.1333 17.2373H19.0578C18.5778 17.2373 18 17.4487 18 18.1091C18 26.2901 24.8711 33.0885 33.12 33.0885C33.7511 33.0885 34 32.5337 34 32.0493V29.0112C34 28.5357 33.6 28.1394 33.12 28.1394Z"
                  fill="white"
                />
              </svg>
            </li>
            <li className="navbar__btn">
              <button>Book Now</button>
            </li>
            <li onClick={() => toggle_menu()}>
              <span>MENU</span>
              <img src="src/assets/burger-bar.png" alt="" />
            </li>
          </ul>
          <ul
            className={`menu__custome text-white d-flex align-items-center justify-content-start flex-column ${
              toggleActive ? toggle : ""
            }`}
          >
            <div
              onClick={() => deactive__menu()}
              className="close__menu text-start "
            >
              <i className="fas fa-xmark"></i>
            </div>
            <li className="mt-5">Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
            <li className="navbar__btn">
              <button>Book Now</button>
            </li>
            <li>
              <img
                src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
                alt=""
              />
              <span>{Math.floor(weather?.main.temp - 273)}</span>
              <svg
                className="mb-4 temp"
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              >
                <circle cx="2.5" cy="2.5" r="2" stroke="white" />
              </svg>
            </li>
            <li>
              <svg className="call"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="25"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M33.12 28.1394C32.0267 28.1394 30.9689 27.9633 29.9822 27.6462C29.6711 27.5406 29.3244 27.6198 29.0844 27.8576L27.6889 29.5924C25.1733 28.4036 22.8178 26.158 21.5644 23.5778L23.2978 22.1159C23.5378 21.8694 23.6089 21.5259 23.5111 21.2177C23.1822 20.2402 23.0133 19.1923 23.0133 18.1091C23.0133 17.6336 22.6133 17.2373 22.1333 17.2373H19.0578C18.5778 17.2373 18 17.4487 18 18.1091C18 26.2901 24.8711 33.0885 33.12 33.0885C33.7511 33.0885 34 32.5337 34 32.0493V29.0112C34 28.5357 33.6 28.1394 33.12 28.1394Z"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
