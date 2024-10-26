import axios from "axios";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Logout from "./logout";

export default function Booking() {
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  console.log("booking page");
  //console.log(props.state.name);

  const location = useLocation();
  let dronedata;
  if (location.state) {
    dronedata = location.state;
  } else {
    dronedata = "Do not directly jump to this page";
  }

  console.log(dronedata);

  let id = JSON.parse(sessionStorage.getItem("loggedInId"));

  let booking = {
    address: "",
    amount: dronedata.price,
    city: "",
    pincode: "",
    state: "",
    customer: { cusId: id },
    drone: { droneId: dronedata.droneId },
  };

  const [bookingdata, setBookingData] = useState(booking);

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setBookingData({ ...bookingdata, [name]: val });
  }

  let navigate = useNavigate();

  function bookOrder(e) {
    e.preventDefault();
    alert(JSON.stringify(bookingdata));
    axios
      .post("http://localhost:8080/addOrder", bookingdata)
      .then((response) => {
        alert(
          "Order placed Successfully. Order ID is : " + response.data.bookingId
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/home");
  }

  if (customerstatus == null || customerstatus === false) return <Logout />;
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Booking confirmation</h1>
        <div className="row justify-content-center vh-100">
          <div className="col-md-4 col-lg-6">
            <h4 className="mb-3">Billing address</h4>
            <form
              onSubmit={bookOrder}
              className="needs-validation fw-bold bg-secondary bg-opacity-75 text-dark border border-dark border-3 "
              noValidate=""
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-6">
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-7">
                  <label htmlFor="email" className="form-label" />
                  Email
                  <input type="email" className="form-control" id="email" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    id="address"
                    required=""
                    onChange={change}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    id="city"
                    placeholder=""
                    required=""
                    onChange={change}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    id="state"
                    placeholder=""
                    required=""
                    onChange={change}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                    onChange={change}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr />
              <b>Total Amount : </b>
              <input type="text" value={dronedata.price} disabled />
              <hr />

              <button
                className="w-40 btn btn-primary btn-lg mb-5"
                type="submit"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
