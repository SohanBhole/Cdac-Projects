import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

import Login from "./views/login";
import Register from "./views/register";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Navigation from "./views/navigation";
import Admin from "./views/admin";
import AddDrone from "./views/addDrone";
import Logout from "./views/logout.js";
import MyProfile from "./views/myprofile";
import DroneInfo from "./views/droneinfo";
import Booking from "./views/booking";
import UpdateMyProfile from "./views/updatemyprofile";
import MyOrderHistory from "./views/myorderhistory";
import UploadMyDrone from "./views/uploadmydrone";
import ForgotPassword from "./views/forgotpassword";
import VerifyOtp from "./views/verifyotp";
import ChangePassword from "./views/changepassword";
import App from "./App";

export default function Dronebiz() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/home" element={<Home />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/droneinfo/:id" element={<DroneInfo />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/changepassword" element={<ChangePassword />} />
      </Routes>
    </>
  );
}

/*
        <Route path="/updatemyprofile" element={<UpdateMyProfile />} />
        <Route path="/myorderhistory" element={<MyOrderHistory />} />
        <Route path="/uploadmydrone" element={<UploadMyDrone />} />
        <Route path="/addDrone" element={<AddDrone />} />

*/
