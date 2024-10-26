import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminSummary() {
  const [userdata, setUserData] = useState([]);
  const [dronedata, setDroneData] = useState([]);

  function getAllCustomers() {
    axios.get("http://localhost:8080/getAllCustomers").then((response) => {
      console.log(response.data);
      setUserData(response.data);
    });
  }

  function getAllDrones() {
    axios.get("http://localhost:8080/getAllDrones").then((response) => {
      console.log(response.data);
      setDroneData(response.data);
    });
  }

  useEffect(() => {
    getAllCustomers();
  }, []);

  useEffect(() => {
    getAllDrones();
  }, []);

  const deletedrone = async (id) => {
    console.log(id);
    await axios
      .get(`http://localhost:8080/deleteDrone?droneId=${id}`)
      .then((response) => {
        console.log(response.data);
      });
    getAllDrones();
  };

  const deletecustomer = async (id) => {
    console.log(id);
    await axios
      .get(`http://localhost:8080/deleteCustomer?customerId=${id}`)
      .then((response) => {
        console.log(response.data);
      });
    getAllCustomers();
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-6 ">
            <table className="table table-bordered border-primary table-info  table-hover">
              <thead>
                <tr className="table-secondary">
                  <th>Drone ID </th>
                  <th>Company </th>
                  <th>Model Name </th>
                  <th>Category </th>
                  <th>Remove </th>
                </tr>
              </thead>
              <tbody>
                {dronedata.map((drone, index) => (
                  <tr key={index}>
                    <td>{drone.droneId}</td>
                    <td>{drone.company}</td>
                    <td>{drone.modelName}</td>
                    <td>{drone.type}</td>
                    <td>
                      <input
                        type="button"
                        className="btn btn-danger"
                        value="Delete"
                        onClick={() => {
                          deletedrone(drone.droneId);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-5">
            {" "}
            <table className="table table-bordered border-primary table-info table-hover">
              <thead>
                <tr className="table-secondary">
                  <th>Customer ID </th>
                  <th>Name </th>
                  <th>Email </th>
                  <th>Remove </th>
                </tr>
              </thead>
              <tbody>
                {userdata.map((user, index) => (
                  <tr key={index}>
                    <td>{user.cusId}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {" "}
                      <input
                        type="button"
                        className="btn btn-danger"
                        value="Delete"
                        onClick={() => {
                          deletecustomer(user.cusId);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

/*



import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminSummary() {
  const [userdata, setUserData] = useState([]);
  const [dronedata, setDroneData] = useState([]);

  function getAllCustomers() {
    axios.get("http://localhost:8080/getAllCustomers").then((response) => {
      console.log(response.data);
      setUserData(response.data);
    });
  }

  function getAllDrones() {
    axios.get("http://localhost:8080/getAllDrones").then((response) => {
      console.log(response.data);
      setDroneData(response.data);
    });
  }

  useEffect(() => {
    getAllCustomers();
  }, []);

  useEffect(() => {
    getAllDrones();
  }, []);

  const deletedrone = async (id) => {
    console.log(id);
    await axios
      .get(`http://localhost:8080/deleteDrone?droneId=${id}`)
      .then((response) => {
        console.log(response.data);
      });
    getAllDrones();
  };

  const deletecustomer = async (id) => {
    console.log(id);
    await axios
      .get(`http://localhost:8080/deleteCustomer?customerId=${id}`)
      .then((response) => {
        console.log(response.data);
      });
    getAllCustomers();
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-7 bg-light">
            <table className="table table-bordered border-primary table-warning table-hover">
              <thead>
                <tr>
                  <th>Drone ID </th>
                  <th>Company </th>
                  <th>Model Name </th>
                  <th>Category </th>
                  <th>Remove </th>
                </tr>
              </thead>
              <tbody>
                {dronedata.map((drone, index) => (
                  <tr key={index}>
                    <td>{drone.droneId}</td>
                    <td>{drone.company}</td>
                    <td>{drone.modelName}</td>
                    <td>{drone.type}</td>
                    <td>
                      <input
                        type="button"
                        className="btn btn-danger"
                        value="Delete"
                        onClick={() => {
                          deletedrone(drone.droneId);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-5 bg-success">
            {" "}
            <table className="table table-bordered border-primary table-warning table-hover">
              <thead>
                <tr>
                  <th>Customer ID </th>
                  <th>Name </th>
                  <th>Email </th>
                  <th>Remove </th>
                </tr>
              </thead>
              <tbody>
                {userdata.map((user, index) => (
                  <tr key={index}>
                    <td>{user.cusId}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {" "}
                      <input
                        type="button"
                        className="btn btn-danger"
                        value="Delete"
                        onClick={() => {
                          deletecustomer(user.cusId);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}



*/
