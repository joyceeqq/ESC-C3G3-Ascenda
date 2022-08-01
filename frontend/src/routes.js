import Index from "views/Index.js";
import Profile from "views/pages/Profile.js";
import Register from "views/pages/Register.js";
import Login from "views/pages/Login.js";
import Tables from "views/pages/Tables.js";
import CardDetails from "views/pages/Redeem";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/redeem",
    name: "Redeem",
    icon: "ni ni-planet text-blue",
    component: CardDetails,
    layout: "/admin",
  },
 /* {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },*/
  {
    path: "/tables",
    name: "Transaction History",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];

// for(let program in cardInfo){
//   routes.push({
//     path: `/redeem/${cardInfo[program].companyName.trim()}`,
//     name: cardInfo[program].companyName.trim(),
//     component: CardDetails,
//     layout: "/auth",
//   })
// }
// console.log(routes);

export default routes;
