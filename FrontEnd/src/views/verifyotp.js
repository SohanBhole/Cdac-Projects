import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../css/forgotpassword.css";

export default function VerifyOtp() {
  const [otp, setotp] = useState();

  let navigate = useNavigate();

  const handleotp = (e) => {
    setotp(e.target.value);
  };

  async function handleverifyotp(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/verifyotp", otp, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
        if (response.data.status) {
          alert(response.data.message);
          navigate("/changepassword");
        } else {
          alert(response.data.message);
          // navigate("/verifyotp");
        }
      });
  }

  return (
    <>
      <h4>Page for Verifying OTP</h4>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 vh-9 d-flex align-items-center">
            <Card
              style={{ width: "50rem", height: "20rem" }}
              className="border border-dark border-4 rounded"
            >
              <Card.Body>
                <h3 className="mail">Enter OTP Received: </h3>
                <input
                  type="email"
                  placeholder="Enter OTP"
                  className="form-control"
                  onChange={handleotp}
                />
                <br />
                <input
                  type="button"
                  class="btn btn-warning m-3"
                  value="Send OTP"
                  onClick={handleverifyotp}
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


 <div>Page for Verifying OTP</div>
      Enter OTP Received :{" "}
      <input type="text" placeholder="Enter OTP" onChange={handleotp} />
      <br />
      <input type="button" value="Verify OTP" onClick={handleverifyotp} />

*/
