import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Logout from "./logout";
import MyOrderHistory from "./myorderhistory";
import UpdateMyProfile from "./updatemyprofile";
import UploadMyDrone from "./uploadmydrone";
import "../css/myprofile.css";

export default function MyProfile() {
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  console.log("customer page");

  const [focus, setFocus] = useState({
    first: true,
    second: false,
    third: false,
  });

  function switchcomponent1() {
    setFocus({ first: true, second: false, third: false });
  }

  function switchcomponent2() {
    setFocus({ first: false, second: true, third: false });
  }

  function switchcomponent3() {
    setFocus({ first: false, second: false, third: true });
  }

  if (customerstatus == null || customerstatus === false) return <Logout />;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 border border-dark vh-100">
            <div onClick={switchcomponent1} className="up">
              <button type="button" class="btn btn-dark">
                Update Profile
              </button>
            </div>
            <br />
            <div onClick={switchcomponent2} className="up">
              <button type="button" class="btn btn-dark">
                Order's History
              </button>
            </div>
            <br />
            <div onClick={switchcomponent3} className="up">
              <button type="button" class="btn btn-dark">
                Upload my drone
              </button>
            </div>
          </div>
          <div className="col">
            {focus.first && <UpdateMyProfile />}
            {focus.second && <MyOrderHistory />}
            {focus.third && <UploadMyDrone />}
          </div>
        </div>
      </div>
    </>
  );
}

/*


import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Logout from "./logout";
import MyOrderHistory from "./myorderhistory";
import UpdateMyProfile from "./updatemyprofile";
import UploadMyDrone from "./uploadmydrone";

export default function MyProfile() {
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  console.log("customer page");

  const [focus, setFocus] = useState({
    first: true,
    second: false,
    third: false,
  });

  function switchcomponent1() {
    setFocus({ first: true, second: false, third: false });
  }

  function switchcomponent2() {
    setFocus({ first: false, second: true, third: false });
  }

  function switchcomponent3() {
    setFocus({ first: false, second: false, third: true });
  }

  if (customerstatus == null || customerstatus === false) return <Logout />;
  return (
    <>
      <div className="container-fluid bg-warning">
        <div className="row">
          <div className="col-3 bg-secondary vh-100">
            <div
              className="border border-primary rounded-pill"
              onClick={switchcomponent1}
            >
              <b>Update Profile</b>
            </div>
            <br />
            <div
              className="border border-primary rounded-pill"
              onClick={switchcomponent2}
            >
              <b> Orders' History</b>
            </div>
            <br />
            <div
              className="border border-primary rounded-pill"
              onClick={switchcomponent3}
            >
              <b>Upload my Drone</b>
            </div>
          </div>
          <div className="col bg-success">
            {focus.first && <UpdateMyProfile />}
            {focus.second && <MyOrderHistory />}
            {focus.third && <UploadMyDrone />}
          </div>
        </div>
      </div>
    </>
  );
}


*/
