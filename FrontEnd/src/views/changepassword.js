import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../css/forgotpassword.css";

export default function ChangePassword() {
  const [newpsw, setnewpsw] = useState();
  let navigate = useNavigate();

  const handlechangepsw = (e) => {
    setnewpsw(e.target.value);
  };

  async function handlenewpsw(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/changepassword", newpsw, {
        headers: { "Content-Type": "text/html; charset=UTF-8" },
      })
      .then((response) => {
        alert(response.data);

        navigate("/login");
      });
  }

  return (
    <>
      <h4>Change Password Page</h4>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 vh-9 d-flex align-items-center">
            <Card
              style={{ width: "50rem", height: "20rem" }}
              className="border border-dark border-4 rounded"
            >
              <Card.Body>
                <h3 className="mail">Enter new Password : </h3>
                <input
                  type="email"
                  placeholder="Enter new password"
                  className="form-control"
                  onChange={handlechangepsw}
                />
                <br />
                <input
                  type="button"
                  class="btn btn-warning m-3"
                  value="Change password"
                  onClick={handlenewpsw}
                />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

/*
<div>Change Password Page</div>
      Enter new password :{" "}
      <input
        type="text"
        placeholder="Enter new password"
        onChange={handlechangepsw}
        required
      />
      <br />
      <input type="button" value="Change Password" onClick={handlenewpsw} />

*/
