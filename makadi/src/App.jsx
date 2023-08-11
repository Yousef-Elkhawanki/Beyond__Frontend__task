import React, { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Service } from "./Components/Service/Service";
import { Form } from "./Components/Form/Form";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
  const query = new QueryClient();
  const [toggleNavbar, setToggleNavbar] = useState(false);
  function toggleNavbarChange() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setToggleNavbar(true);
      } else {
        setToggleNavbar(false);
      }
    });
  }
  useEffect(() => {
    toggleNavbarChange();
    $(".isLoading h1").fadeOut(2000, () => {
      $(".isLoading").slideUp(2000, () => {
        $(".isLoading").remove();
        $("body").css("overflow", "auto");
      });
    });
  }, [setToggleNavbar]);
  return (
    <>
      <QueryClientProvider client={query}>
        <Navbar toggleNavbar={toggleNavbar} />
        <div className="isLoading">
          <div className="container">
            <h1>makadi</h1>
          </div>
        </div>
        <Hero />
        <Service />
        <Form />
      </QueryClientProvider>
    </>
  );
};
