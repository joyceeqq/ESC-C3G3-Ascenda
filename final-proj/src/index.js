import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./assets/plugins/nucleo/css/nucleo.css";
// //import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
