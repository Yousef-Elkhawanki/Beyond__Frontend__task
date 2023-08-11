import React, { useEffect, useState } from "react";
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
  }, [setToggleNavbar]);
  return (
    <>
      <QueryClientProvider client={query}>
        <Navbar toggleNavbar={toggleNavbar} />
        <Hero />
        <Service />
        <Form />
      </QueryClientProvider>
    </>
  );
};
