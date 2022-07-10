import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import "./assets/plugins/nucleo/css/nucleo.css";
// //import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/scss/argon-dashboard-react.scss";

import AuthLayout from "./layouts/Auth.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);