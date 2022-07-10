import React from "react";

// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar.js";
import RecordList from "./components/recordList.js";
import Edit from "./components/edit.js";
import Create from "./components/create.js";
import AuthLayout from "./layouts/Auth.js";

const App = () => {
 return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
    </Routes>
  </BrowserRouter>
   </div>
 );
};

export default App;
