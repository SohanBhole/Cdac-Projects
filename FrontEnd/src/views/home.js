import CheckSession from "./checksession";
import { useEffect, useState } from "react";
import Logout from "./logout";
import Login from "./login";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
//let cors = require("../images/droneimages");
//import pic from "./2-droneabc.jpg";

export default function Home() {
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  /*
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  if (!customerstatus) {
    return <Logout />;
  }
  */
  const navigate = useNavigate();
  const [droneData, setDroneData] = useState([]);

  console.log("customer page");

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get("http://localhost:8080/getAllDrones")
        .then((response) => {
          //alert(JSON.stringify(response.data));
          console.log(response.data);
          setDroneData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getdata();
  }, []);

  const getthatdrone = (id) => {
    console.log(id);
    navigate(`/droneinfo/${id}`);
  };

  /*
  listItems = droneData.map((item) => (
    <div className="card" key={item.droneId}>
      <div className="card_img">
        <img
          src={require(`../images/droneimages/${item.dronePic}.jpg`)}
          alt=" "
        />
      </div>
      <div className="card_header">
        <h2 className="h2">{item.modelName}</h2>
        <p className="p">static description</p>
        <p className="price">
          {item.price}
          <span className="span">static INR</span>
        </p>
        <div className="button">
          <button type="button" className="btn btn-success">
            Buy
          </button>
        </div>
        <div className="button_1">
          <button type="button" className="btn btn-warning">
            Rent
          </button>
        </div>
      </div>
    </div>
  ));

  */
  if (customerstatus == null || customerstatus === false) return <Logout />;

  return (
    <>
      <div className="products ">
        {droneData?.map((item) => (
          <div
            className="card border border-dark border-3 rounded "
            key={item.droneId}
          >
            <div className="card_img img-fluid">
              <img
                src={`../images/droneimages/${item.dronePic}`}
                alt=" "
                height="300"
                width="400"
                className="border border-warning border-4 rounded"
              />
            </div>
            <div className="card_header">
              <h2 className="h2">{item.modelName}</h2>
              <h4 className="text-primary">Company : {item.company}</h4>
              <h4 className="text-info">Category : {item.type}</h4>
              <h4 className="text-success">Rating : {item.rating}</h4>
              <p className="price">Price : {item.price} INR</p>
              <div className="button">
                <button
                  type="button"
                  className="btn btn-success btn-lg mb-0 border border-dark"
                  onClick={() => {
                    getthatdrone(`${item.droneId}`);
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/*

<img src={require(`../images/droneimages/${item.dronePic}`)} alt=" " />


                  <Link
                    to={{
                      pathname: "/droneinfo",
                      state: { name: `Mohanish` }, // your data array of objects
                    }}
                  >
                    Buy
                  </Link>


                  <img src={require("../images/droneimages" + "/2-droneabc.jpg")} />
*/
