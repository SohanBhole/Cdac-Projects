//import { Redirect } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Navigate, Redirect } from "react-router";
import axios from "axios";
import "../css/register.css";

export default function Register() {
  let navigate = useNavigate();
  //let history = useHistory();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [registerResult, setRegisterResult] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function register(e) {
    e.preventDefault();
    setRegisterErrors(validate(registerData));
    setIsSubmit(true);

    //alert(JSON.stringify(registerData));
    axios
      .post("http://localhost:8080/register", registerData)
      .then((response) => {
        //alert(response.data);
        alert(JSON.stringify(response.data));

        //navigate("/login");

        setRegisterResult(response.data);
        //return <Navigate replace to="/login" />;

        navigate("/login");
        //return <Redirect to="/login" />;
        //history.push('/login');
        // if (response.data.status) {
        //   alert(response.data.message);
        //   sessionStorage.setItem("customerId", response.data.customerId);
        //   sessionStorage.setItem("customerName", response.data.customerName);
        // }
      });
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setRegisterData({ ...registerData, [name]: val });
  }

  useEffect(() => {
    console.log(registerErrors);
    if (Object.keys(registerErrors).length === 0 && isSubmit) {
      console.log(registerData);
    }
  }, [registerErrors]);

  const validate = (values) => {
    const errors = {};
    const regex_email = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z]).{5,}$/;
    const regex_password =
      /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,20}$/;

    if (!values.name) {
      errors.name = "Name is required !";
    }

    if (!values.email) {
      errors.email = "Proper email is required !";
    }

    if (values.password !== regex_password) {
      errors.password = "Password is incorrect !";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is required !";
    }

    return errors;
  };

  return (
    <div>
      <h1 className="reg mt-5">Register</h1>
      <h2>{registerResult.message}</h2>
      <form onSubmit={register}>
        <div className="form-group row mt-3 justify-content-center">
          <label htmlFor="entername" className="col-1 col-form-label-lg">
            <b>Enter Name : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                name="name"
                type="text"
                className="form-control"
                value={registerData.name}
                onChange={change}
              />{" "}
            </div>
          </div>
        </div>
        <p style={{ color: "red" }}>{registerErrors.name}</p>

        <div className="form-group row mt-auto justify-content-center">
          <label htmlFor="enteremail" className="col-1 col-form-label-lg">
            <b>Enter email : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                className="form-control"
                name="email"
                type="email"
                value={registerData.email}
                onChange={change}
              />{" "}
              <br />
            </div>
          </div>
        </div>
        <p style={{ color: "red" }}>{registerErrors.email}</p>

        <div className="form-group row mt-4 justify-content-center">
          <label htmlFor="enterpassword" className="col-1 col-form-label-lg">
            <b>Enter password : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                className="form-control"
                name="password"
                type="password"
                value={registerData.password}
                onChange={change}
              />{" "}
              <br />
            </div>
          </div>
        </div>
        <p style={{ color: "red" }}>{registerErrors.password}</p>

        <div className="form-group row mt-2 justify-content-center">
          <label htmlFor="enterpassword" className="col-1 col-form-label-lg">
            <b>Enter mobile: </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                className="form-control"
                name="mobile"
                type="text"
                value={registerData.mobile}
                onChange={change}
              />{" "}
              <br />
            </div>
          </div>
        </div>
        <p style={{ color: "red" }}>{registerErrors.mobile}</p>

        <div className="submit">
          <button type="submit" className="btn btn-success col-1">
            Register
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}

/*






import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../css/register.css";

export default function Register() {
  let navigate = useNavigate();
  //let history = useHistory();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const [registerResult, setRegisterResult] = useState({});

  function register(e) {
    e.preventDefault();
    alert(JSON.stringify(registerData));
    axios
      .post("http://localhost:8080/register", registerData)
      .then((response) => {
        //alert(response.data);
        alert(JSON.stringify(response.data));

        //navigate("/login");

        setRegisterResult(response.data);
        //return <Navigate replace to="/login" />;

        navigate("/login");
        //return <Redirect to="/login" />;
        //history.push('/login');
        // if (response.data.status) {
        //   alert(response.data.message);
        //   sessionStorage.setItem("customerId", response.data.customerId);
        //   sessionStorage.setItem("customerName", response.data.customerName);
        // }
      });
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setRegisterData({ ...registerData, [name]: val });
  }

  return (
    <div>
      <h1 className="reg mt-5">Register</h1>
      <h2>{registerResult.message}</h2>
      <form onSubmit={register}>
        <div className="form-group row mt-3 justify-content-center">
          <label htmlFor="entername" className="col-1 col-form-label-lg">
            <b>Enter Name : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                name="name"
                type="text"
                className="form-control"
                value={registerData.name}
                onChange={change}
              />{" "}
            </div>
          </div>
        </div>
        <br />

        <div className="form-group row mt-auto justify-content-center">
          <label htmlFor="enteremail" className="col-1 col-form-label-lg">
            <b>Enter email : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                className="form-control"
                name="email"
                type="email"
                value={registerData.email}
                onChange={change}
              />{" "}
              <br />
            </div>
          </div>
        </div>

        <div className="form-group row mt-4 justify-content-center">
          <label htmlFor="enterpassword" className="col-1 col-form-label-lg">
            <b>Enter password : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                className="form-control"
                name="password"
                type="password"
                value={registerData.password}
                onChange={change}
              />{" "}
              <br />
            </div>
          </div>
        </div>

        <div className="form-group row mt-2 justify-content-center">
          <label htmlFor="enterpassword" className="col-1 col-form-label-lg">
            <b>Enter mobile: </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-12">
              <input
                className="form-control"
                name="mobile"
                type="text"
                value={registerData.mobile}
                onChange={change}
              />{" "}
              <br />
            </div>
          </div>
        </div>
        <div className="submit">
          <button type="submit" className="btn btn-success col-1">
            Register
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}



*/

/*
//import { Redirect } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
//import { Navigate, Redirect } from "react-router";
import axios from "axios";

export default function Register() {
  let navigate = useNavigate();
  //let history = useHistory();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const [registerResult, setRegisterResult] = useState({});

  function register(e) {
    e.preventDefault();
    alert(JSON.stringify(registerData));
    axios
      .post("http://localhost:8080/register", registerData)
      .then((response) => {
        //alert(response.data);
        alert(JSON.stringify(response.data));

        //navigate("/login");

        setRegisterResult(response.data);
        //return <Navigate replace to="/login" />;

        navigate("/login");
        //return <Redirect to="/login" />;
        //history.push('/login');
        // if (response.data.status) {
        //   alert(response.data.message);
        //   sessionStorage.setItem("customerId", response.data.customerId);
        //   sessionStorage.setItem("customerName", response.data.customerName);
        // }
      });
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setRegisterData({ ...registerData, [name]: val });
  }

  return (
    <div>
      <h2>{registerResult.message}</h2>

      <form onSubmit={register}>
        Enter Name :{" "}
        <input
          name="name"
          type="text"
          value={registerData.name}
          onChange={change}
        />{" "}
        <br />
        Enter email :{" "}
        <input
          name="email"
          type="email"
          value={registerData.email}
          onChange={change}
        />{" "}
        <br />
        Enter password :{" "}
        <input
          name="password"
          type="password"
          value={registerData.password}
          onChange={change}
        />{" "}
        <br />
        Enter mobile :{" "}
        <input
          name="mobile"
          type="text"
          value={registerData.mobile}
          onChange={change}
        />{" "}
        <br />
        <button type="submit" className="btn btn-outline-primary">
          Register
        </button>
        <br />
        <input className="btn btn-primary" type="reset" value="Reset"></input>
      </form>
    </div>
  );
}
*/
