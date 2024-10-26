import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddDrone from "./addDrone";
import AdminSummary from "./adminsummary";
import ApproveDrones from "./approvedrones";
import CheckSession from "./checksession";
import Login from "./login";
import Logout from "./logout";
import "../css/admin.css";

export default function Admin() {
  console.log("admin page");

  const [summary, setSummary] = useState({});
  const [focus, setFocus] = useState({
    first: true,
    second: false,
    third: false,
  });

  useEffect(() => {
    axios.get("http://localhost:8080/getSummary").then((response) => {
      setSummary(response.data);
    });
  }, []);

  function switchcomponent1() {
    setFocus({ first: true, second: false, third: false });
  }

  function switchcomponent2() {
    setFocus({ first: false, second: true, third: false });
  }

  function switchcomponent3() {
    setFocus({ first: false, second: false, third: true });
  }

  let adminstatus = JSON.parse(sessionStorage.getItem("admin"));
  if (adminstatus == null || adminstatus === false) return <Logout />;

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row">
          <div className="m-1 col-3 text-white vh-100 border border-dark">
            {" "}
            <div className="" onClick={switchcomponent1}>
              <button type="button" class="btn btn-dark">
                Summary Page
              </button>
            </div>
            <br />
            <div className="" onClick={switchcomponent2}>
              <button type="button" class="btn btn-dark">
                Add Drone
              </button>
            </div>
            <br />
            <div className="" onClick={switchcomponent3}>
              <button type="button" class="btn btn-dark">
                Approve Drone Request
              </button>
            </div>
            <hr className="rounded" />
            <div>
              <h5>Total no. of Customers : {summary.totalCustomers}</h5>
              <h5>Total no. of Drones : {summary.totalDrones}</h5>
              <h5>Total no. of Drones (New) : {summary.totalDronesNew}</h5>
              <h5>
                Total no. of Drones (Refurbished) : {summary.totalDronesOld}
              </h5>
              <h5>Total no. of Orders : {summary.totalOrders}</h5>
              <h5>Total Amount of Orders : {summary.totalOrdersAmount}</h5>
            </div>
          </div>
          <div className="col">
            {focus.first && <AdminSummary />}
            {focus.second && <AddDrone />}
            {focus.third && <ApproveDrones />}
          </div>
        </div>
      </div>
    </>
  );
}

/*
{status ? (
        <>
          <div>Admin Home Page</div>
          <Link to="/addDrone" className="text-info">
            go to add drone page
          </Link>
        </>
      ) : (
        <Login />
      )}

*/

/*
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddDrone from "./addDrone";
import AdminSummary from "./adminsummary";
import ApproveDrones from "./approvedrones";
import CheckSession from "./checksession";
import Login from "./login";
import Logout from "./logout";

export default function Admin() {
  console.log("admin page");
 

  const [summary, setSummary] = useState({});
  const [focus, setFocus] = useState({
    first: true,
    second: false,
    third: false,
  });

  useEffect(() => {
    axios.get("http://localhost:8080/getSummary").then((response) => {
      // console.log(response.data);
      setSummary(response.data);
    });
  }, []);

  function switchcomponent1() {
    setFocus({ first: true, second: false, third: false });
  }

  function switchcomponent2() {
    setFocus({ first: false, second: true, third: false });
  }

  function switchcomponent3() {
    setFocus({ first: false, second: false, third: true });
  }

  let adminstatus = JSON.parse(sessionStorage.getItem("admin"));
  if (adminstatus == null || adminstatus === false) return <Logout />;

  return (
    <>
      <div className="container-fluid vh-100 bg-warning">
        <div className="row">
          <div className="col-2 bg-dark text-white vh-100">
            {" "}
            <div
              className="border border-primary rounded-pill"
              onClick={switchcomponent1}
            >
              <b>Summary Page</b>
            </div>
            <br />
            <div
              className="border border-primary rounded-pill"
              onClick={switchcomponent2}
            >
              <b> Add Drone</b>
            </div>
            <br />
            <div
              className="border border-primary rounded-pill"
              onClick={switchcomponent3}
            >
              <b> Approve Drone Requests</b>
            </div>
            <br />
            <hr />
            <h4>Total no. of Customers : {summary.totalCustomers}</h4>
            <h4>Total no. of Drones : {summary.totalDrones}</h4>
            <h4>Total no. of Drones (New) : {summary.totalDronesNew}</h4>
            <h4>
              Total no. of Drones (Refurbished) : {summary.totalDronesOld}
            </h4>
            <h4>Total no. of Orders : {summary.totalOrders}</h4>
            <h4>Total Amount of Orders : {summary.totalOrdersAmount}</h4>
          </div>
          <div className="col">
            {focus.first && <AdminSummary />}
            {focus.second && <AddDrone />}
            {focus.third && <ApproveDrones />}
          </div>
        </div>
      </div>
    </>
  );
}


*/
