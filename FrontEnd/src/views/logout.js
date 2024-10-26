import { useNavigate } from "react-router-dom";
import Dronebiz from "../dronebiz";
import Login from "./login";
import Navigation from "./navigation";

export default function Logout() {
  let navigate = useNavigate();
  sessionStorage.clear();
  //navigate("/");
  return (
    <>
      <Login />
    </>
  );
}
