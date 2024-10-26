import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./logout";
export default function CheckSession() {
  let navigate = useNavigate();
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  let adminstatus = JSON.parse(sessionStorage.getItem("admin"));

  console.log(customerstatus);
  console.log(adminstatus);

  if (customerstatus == null && adminstatus == null) {
    navigate("/logout");
  }

  let active;

  if (customerstatus) {
    active = "customer";
    return;
  } else if (adminstatus) {
    active = "admin";
    return;
  } else {
    return <Logout />;
  }

  /*
  customerstatus ? (active = "customer") : (active = "admin");

  if (active === "customer") {
    return;
  } else if (active === "admin") {
    return;
  } else {
    navigate("/logout");
  }
  */
}
