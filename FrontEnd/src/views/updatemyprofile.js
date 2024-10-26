import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function UpdateMyProfile() {
  let id = JSON.parse(sessionStorage.getItem("loggedInId"));
  let navigate = useNavigate();

  const [updateResult, setUpdateResult] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCustomer?customerId=${id}`)
      .then((response) => {
        // alert(JSON.stringify(response.data));
        setUpdateResult(response.data);
        setUpdateData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [updateData, setUpdateData] = useState({
    cusId: updateResult.cusId,
    email: updateResult.email,
    password: updateResult.password,
    name: "",
    mobile: "",
    role: updateResult.role,
  });

  function updateprofile(e) {
    e.preventDefault();

    alert(JSON.stringify(updateData));
    axios
      .post("http://localhost:8080/updateCustomer", updateData)
      .then((response) => {
        alert(JSON.stringify(response.data));
        alert("Profile updated successfully");
        setUpdateResult(response.data);
      });

    navigate("/myProfile");
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setUpdateData({ ...updateData, [name]: val });
  }
  return (
    <>
      <h1>Update Profile</h1>
      <form onSubmit={updateprofile}>
        <div className="form-group row mt-4 justify-content-center">
          <label htmlFor="yourid" className="col-2 col-form-label">
            <b> Your id : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input
                name="id"
                type="text"
                defaultValue={updateResult.cusId}
                disabled
              />{" "}
              <br />
            </div>
          </div>
        </div>

        <div className="form-group row mt-3 justify-content-center">
          <label htmlFor="youremail" className="col-2 col-form-label">
            <b> Your email : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input
                name="email"
                type="email"
                defaultValue={updateResult.email}
                disabled
              />{" "}
              <br />
            </div>
          </div>
        </div>

        <div className="form-group row mt-3 justify-content-center">
          <label htmlFor="youremail" className="col-2 col-form-label">
            <b> Update Name : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input
                name="name"
                type="text"
                defaultValue={updateResult.name}
                onChange={change}
              />{" "}
              <br />
            </div>
          </div>
        </div>

        <div className="form-group row mt-3 justify-content-center">
          <label htmlFor="youremail" className="col-2 col-form-label">
            <b> Update mobile : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input
                name="mobile"
                type="text"
                defaultValue={updateResult.mobile}
                onChange={change}
              />{" "}
            </div>
          </div>
        </div>

        <br />
        <div className="update_btn">
          <button type="submit" class="btn btn-dark">
            Update
          </button>
        </div>
      </form>
    </>
  );
}

/*


import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdateMyProfile() {
  let id = JSON.parse(sessionStorage.getItem("loggedInId"));
  let navigate = useNavigate();

  const [updateResult, setUpdateResult] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getCustomer?customerId=${id}`)
      .then((response) => {
        // alert(JSON.stringify(response.data));
        setUpdateResult(response.data);
        setUpdateData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [updateData, setUpdateData] = useState({
    cusId: updateResult.cusId,
    email: updateResult.email,
    password: updateResult.password,
    name: "",
    mobile: "",
    role: updateResult.role,
  });

  function updateprofile(e) {
    e.preventDefault();

    alert(JSON.stringify(updateData));
    axios
      .post("http://localhost:8080/updateCustomer", updateData)
      .then((response) => {
        alert(JSON.stringify(response.data));
        alert("Profile updated successfully");
        setUpdateResult(response.data);
      });

    navigate("/myProfile");
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setUpdateData({ ...updateData, [name]: val });
  }
  return (
    <>
      <h1>Update Profile Page</h1>
      <form onSubmit={updateprofile}>
        Your id :{" "}
        <input
          name="id"
          type="text"
          defaultValue={updateResult.cusId}
          disabled
        />{" "}
        <br />
        Your email :{" "}
        <input
          name="email"
          type="email"
          defaultValue={updateResult.email}
          disabled
        />{" "}
        <br />
        Update Name :{" "}
        <input
          name="name"
          type="text"
          defaultValue={updateResult.name}
          onChange={change}
        />{" "}
        <br />
        Update mobile :{" "}
        <input
          name="mobile"
          type="text"
          defaultValue={updateResult.mobile}
          onChange={change}
        />{" "}
        <br />
        <button type="submit" className="btn btn-outline-primary">
          Update
        </button>
      </form>
    </>
  );
}


*/
