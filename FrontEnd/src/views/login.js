import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  let navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginResult, setLoginResult] = useState({});

  function login(e) {
    e.preventDefault();
    setLoginErrors(validate(loginData));
    setIsSubmit(true);

    e.preventDefault();
    //alert(JSON.stringify(loginData));
    axios.post("http://localhost:8080/login", loginData).then((response) => {
      //alert(response.data);
      // alert(JSON.stringify(response.data));

      setLoginResult(response.data);

      if (response.data.status) {
        alert(response.data.message);

        let status = response.data.customer.role;
        console.log(status);

        sessionStorage.setItem("loggedInName", response.data.customer.name);
        sessionStorage.setItem("loggedInId", response.data.customer.cusId);
        //alert("Logged person name is " + response.data.customer.name);
        //isRole(status);

        if (status === "admin") {
          //alert("this is user");
          sessionStorage.setItem("admin", true);
          sessionStorage.setItem("customer", false);
          navigate("/admin");
        } else {
          // alert("this is admin");
          sessionStorage.setItem("customer", true);
          sessionStorage.setItem("admin", false);
          navigate("/home");
        }

        //sessionStorage.setItem('customerId' , response.data.customerId);
        //sessionStorage.setItem('customerName' , response.data.customerName);
      }
    });
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
    console.log(loginData);
  }

  /*const handleSubmit = (e) =>{
    e.preventDefault();
    setLoginErrors(validate(loginData));
    setIsSubmit(true);
  };*/

  useEffect(() => {
    console.log(loginErrors);
    if (Object.keys(loginErrors).length === 0 && isSubmit) {
      console.log(loginData);
    }
  }, [loginErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    if (!values.email) {
      errors.email = "Proper email is required !";
    }

    if (!values.password) {
      errors.password = "Password is required !";
    }

    return errors;
  };

  return (
    <div>
      <form onSubmit={login}>
        <div className="container">
          <h1 className="page_login mt-5">Login</h1>
          <div className="row">
            <div className="col-lg-8 col-sm-12 m-3"></div>
            <div className="col-lg-4 col-sm-12 m-auto ">
              <div className="form-group col-form-label-lg">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={loginData.email}
                  onChange={change}
                />
              </div>
              <p>{loginErrors.email}</p>
              <div className="form-group col-form-label-lg">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={loginData.password}
                  onChange={change}
                />
              </div>
              <p>{loginErrors.password}</p>
              <button type="submit" className="btn btn-success col-3">
                Login
              </button>
              <br />
              <br />
              <Link
                to="/forgotpassword"
                className="forgot"
                style={{ color: "khaki" }}
              >
                <b>Forgot Password ?</b>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

/*

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SignIcon from "../images/signup.svg";
import "../css/login.css";

export default function Login() {
  let navigate = useNavigate();

  //sessionStorage.setItem("customer", false);
  //sessionStorage.setItem("admin", false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginResult, setLoginResult] = useState({});

  function login(e) {
    e.preventDefault();
    alert(JSON.stringify(loginData));
    axios.post("http://localhost:8080/login", loginData).then((response) => {
      //alert(response.data);
      alert(JSON.stringify(response.data));

      setLoginResult(response.data);

      if (response.data.status) {
        alert(response.data.message);

        let status = response.data.customer.role;
        console.log(status);

        sessionStorage.setItem("loggedInName", response.data.customer.name);
        sessionStorage.setItem("loggedInId", response.data.customer.cusId);
        //alert("Logged person name is " + response.data.customer.name);
        //isRole(status);

        if (status === "admin") {
          //alert("this is user");
          sessionStorage.setItem("admin", true);
          sessionStorage.setItem("customer", false);
          navigate("/admin");
        } else {
          // alert("this is admin");
          sessionStorage.setItem("customer", true);
          sessionStorage.setItem("admin", false);
          navigate("/home");
        }

        //sessionStorage.setItem('customerId' , response.data.customerId);
        //sessionStorage.setItem('customerName' , response.data.customerName);
      }
    });
  }

  /*
  function isRole(status) {
    if (status === "admin") {
      //alert("this is user");
      navigate("/admin");
    } else {
      // alert("this is admin");
      navigate("/home");
    }
  }

  */

/*

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  }

  return (
    <div>
      <form onSubmit={login} className="bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <img className="sign" src={SignIcon} alt="icon" />
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={loginData.email}
                  onChange={change}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={loginData.password}
                  onChange={change}
                />
              </div>

              <button type="submit">Login</button>
              <br />
              <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                Forgot Password ?
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>


  );
}

*/
