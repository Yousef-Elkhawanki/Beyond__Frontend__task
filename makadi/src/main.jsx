import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
