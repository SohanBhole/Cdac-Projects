import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Booking from "./booking";
import Logout from "./logout";

export default function DroneInfo() {
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  console.log("droneinfo page");
  const location = useLocation();
  let { id } = useParams();
  const [drone, setDrone] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getDrone?droneId=${id}`)
      .then((response) => {
        console.log(response.data);
        setDrone(response.data);
      });
  }, [id]);

  if (customerstatus == null || customerstatus === false) return <Logout />;
  return (
    <>
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              <div>Drone id is : {id}</div>
              Drone Model :{" "}
              <span className="text-muted">{drone.modelName}</span>
              <br />
              Drone Brand : <span className="text-muted">{drone.company}</span>
              <br />
              Price : <span className="text-muted">{drone.price}</span>
              <br />
              Category : <span className="text-muted">{drone.type}</span>
              <br />
            </h2>
            <p className="lead">product description</p>

            <Link to="/booking" state={drone}>
              <button type="button" className="btn btn-primary btn-lg">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="col-md-5 order-md-1 mt-5">
            <img
              src={`../images/droneimages/${drone.dronePic}`}
              alt="selected drone pic"
              height="250"
              width="350"
            />
          </div>
        </div>
      </div>
    </>
  );
}

/*
<!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>-->


              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>


                          <Link to="/booking">
              <button type="button" className="btn btn-primary btn-lg">
                Buy Now
              </button>
            </Link>
*/
