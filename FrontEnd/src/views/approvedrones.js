import axios from "axios";
import { useEffect, useState } from "react";

export default function ApproveDrones() {
  const [requestdata, setRequestData] = useState([]);

  function getdroneAddRequests() {
    axios
      .get("http://localhost:8080/getDroneRequests")
      .then((response) => {
        console.log(response.data);
        setRequestData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getdroneAddRequests();
  }, []);

  let approvedrone = async (id) => {
    await axios.get(`http://localhost:8080/approveDrone?droneId=${id}`);
    getdroneAddRequests();
  };

  let rejectdrone = async (id) => {
    await axios.get(`http://localhost:8080/deleteDrone?droneId=${id}`);
    getdroneAddRequests();
  };

  if (requestdata.length <= 0) {
    return (
      <div>
        <b>
          <i>
            <h2>No any Pending Drone Add Request from Customer</h2>
          </i>
        </b>
      </div>
    );
  }
  return (
    <>
      <div>
        <b>Verify drones uploaded by customer :</b>
      </div>
      <table className="table table-bordered border-primary table-warning table-hover">
        <thead>
          <tr>
            <th>Drone ID</th>
            <th>Company</th>
            <th>Model Name</th>
            <th>Price</th>
            <th>Approve</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {requestdata.map((drone, index) => (
            <tr key={index}>
              <td>{drone.droneId}</td>
              <td>{drone.company}</td>
              <td>{drone.modelName}</td>
              <td>{drone.price}</td>
              <td>
                <input
                  type="button"
                  className="btn btn-success"
                  value="Approve"
                  onClick={() => {
                    approvedrone(drone.droneId);
                  }}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="btn btn-danger"
                  value="Reject"
                  onClick={() => {
                    rejectdrone(drone.droneId);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
