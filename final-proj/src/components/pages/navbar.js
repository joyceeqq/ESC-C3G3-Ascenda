import React from "react";
import logo1 from "../images/Logo_1.png"
import logo2 from "../images/logo4.png"
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
 return (
   <div >
    
     <nav className="navbar navbar-expand-lg navbar-light ">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} src={logo2} />
 
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
         <li className="nav-item">
             <NavLink className="nav-link" to="/redeem">
               Redeem Rewards
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/tables">
               Transaction History
             </NavLink>
           </li>
           
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Sign Out
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
     <div>
      
    
    </div>
   </div>
   
 );
}
