import axios from "axios";
import { useEffect, useState } from "react";

export default function MyOrderHistory() {
  let id = JSON.parse(sessionStorage.getItem("loggedInId"));

  const [orderdata, setOrderData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getAllOrdersByCusId?customerId=${id}`)
      .then((response) => {
        console.log(response.data);
        setOrderData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Order History Page</h1>
      <table className="table table-bordered border-primary table-warning table-hover">
        <thead>
          <tr>
            <th>Booking ID </th>
            <th>Product Name </th>
            <th>Price </th>
            <th>Date Purchased </th>
          </tr>
        </thead>
        <tbody>
          {orderdata.map((order, index) => (
            <tr key={index}>
              <td>{order.bookingId}</td>
              <td>{order.drone.modelName}</td>
              <td>{order.drone.price}</td>
              <td>{order.bookDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
