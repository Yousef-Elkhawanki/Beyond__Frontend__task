import React, { useEffect } from "react";
import { Home } from "./Components/Home/Home";
import { Services } from "./Components/Services/Services";
import { Form } from "./Components/Form/Form";
import { Navbar } from "./Components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import $ from "jquery";
export const App = () => {
  useEffect(() => {
    $(window).ready(() => {
      $(".isLoading i").fadeOut(2000, () => {
        $(".isLoading").hide(2000);
      });
    });
  });
  const query = new QueryClient();
  return (
    <>
      <div className="isLoading">
        <i className="fas fa-spinner fa-spin"></i>
      </div>
      <QueryClientProvider client={query}>
        <Navbar />
      </QueryClientProvider>
      <main>
        <Home />
        <Services />
        <Form />
      </main>
    </>
  );
};
