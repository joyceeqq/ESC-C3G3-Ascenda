import Index from "./views/Index.js";
// import Profile from "./views/Profile.js";
// import Maps from "./views/Maps.js";
// import Register from "./views/Register.js";
// import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
// import Icons from "./views/examples/Icons.js";

var Navs = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
];
export default Navs;
