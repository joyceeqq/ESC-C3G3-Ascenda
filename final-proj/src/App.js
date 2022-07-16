import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/pages/navbar.js";
import RecordList from "./components/pages/recordList.js";
import Edit from "./components/pages/edit.js";
import Create from "./components/pages/create.js";
import Tables from "./components/pages/Tables.js";
import CardDetails from "./components/pages/redeem.js";

const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/tables" element={<Tables />} />
       <Route path="/redeem" element={<CardDetails />} />
     </Routes>
   </div>
 );
};

export default App;
