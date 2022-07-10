import React from "react";

// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/pages/navbar.js";
import RecordList from "./components/pages/recordList.js";
import Edit from "./components/pages/edit.js";
import Create from "./components/pages/create.js";
import AuthLayout from "./layouts/Auth.js";
import Tables from "./views/examples/Tables.js"

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/tables" element={<Tables />} />
     </Routes>
   </div>
 );
};

export default App;
