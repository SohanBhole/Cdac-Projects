import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../css/forgotpassword.css";

export default function ForgotPassword() {
  const [forgotpsw, setforgotpsw] = useState();
  let navigate = useNavigate();

  const handleforgotpsw = (e) => {
    console.log(e.target.value);
    setforgotpsw(e.target.value);
  };

  async function handleotp(e) {
    e.preventDefault();
    console.log("OTP");

    //console.log("Email is" + forgotemail);

    //console.log(JSON.stringify(forgotemail));
    await axios
      .get(`http://localhost:8080/sendotp?forgotpsw=${forgotpsw}`)
      .then((response) => {
        alert(JSON.stringify(response.data));

        if (response.data.status) {
          alert(response.data.message);
          navigate("/verifyotp");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // sessionStorage.setItem("cus")

    //navigate("/verifyotp");
  }
  return (
    <>
      <h4>Forgot Password Page</h4>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 vh-9 d-flex align-items-center">
            <Card
              style={{ width: "50rem", height: "20rem" }}
              className="border border-dark border-4 rounded"
            >
              <Card.Body>
                <h3 className="mail">
                  Enter your Registered <p>E-mail:</p>{" "}
                </h3>
                <input
                  type="email"
                  placeholder="Enter mail"
                  className="form-control"
                  onChange={handleforgotpsw}
                />
                <br />
                <input
                  type="button"
                  class="btn btn-warning m-3"
                  value="Send OTP"
                  onClick={handleotp}
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

<div>Forgot Password Page</div>
      Enter your registered mail :{" "}
      <input
        type="email"
        placeholder="Enter mail"
        onChange={handleforgotemail}
      />
      <br />
      <input type="button" value="Send OTP" onClick={handleotp} />
*/
