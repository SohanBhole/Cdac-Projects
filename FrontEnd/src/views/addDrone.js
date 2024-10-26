import axios from "axios";
import { useState } from "react";
import Admin from "./admin";
import CheckSession from "./checksession";
import Login from "./login";
import Logout from "./logout";

export default function AddDrone() {
  let adminstatus = JSON.parse(sessionStorage.getItem("admin"));

  async function handleSubmit(e) {
    e.preventDefault();
    let formobj = document.getElementById("myform");
    const formData = new FormData(formobj);
    alert(JSON.stringify(formData));
    await axios
      .post("http://localhost:8080/uploaddronepic", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
      });
  }
  console.log("admin page");
  if (adminstatus == null || adminstatus === false) return <Logout />;

  return (
    <>
      <div>
        <h2>Add new Drones : </h2>
      </div>

      <form
        id="myform"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <br />
        <div className="form-group row mt-2 justify-content-center">
          <label htmlFor="entermodelname" className="col-2 col-form-label-lg">
            <b> Enter Model Name:</b>
          </label>
          <div className="col-4 col-form-label-lg">
            <div className="col-12">
              <input type="text" name="modelName" className="form-control" />
            </div>
          </div>
        </div>
        <br />
        <div className="form-group row mt-1 justify-content-center">
          <label htmlFor="entercompanyname" className="col-2 col-form-label-lg">
            <b> Enter Company Name : </b>
          </label>
          <div className="col-4 col-form-label">
            <div className="col-12">
              <input type="text" name="company" className="form-control" />
            </div>
          </div>
        </div>
        <br />

        <div className="form-group row  justify-content-center">
          <label htmlFor="enterprice" className="col-2 col-form-label-lg">
            <b> Enter Price : </b>
          </label>
          <div className="col-4 col-form-label">
            <div className="col-12">
              <input type="text" name="price" className="form-control" />
            </div>
          </div>
        </div>
        <br />
        <div className="form-group row justify-content-center">
          <label htmlFor="enterrating" className="col-2 col-form-label-lg">
            <b> Enter Rating : </b>
          </label>
          <div className="col-4 col-form-label">
            <div className="col-12">
              <input type="text" name="rating" className="form-control" />
              <br />
            </div>
          </div>
        </div>

        <div className="form-group row justify-content-center mt-2">
          <label htmlFor="uploaddroneimage" className="col-2 col-form-label-lg">
            <b> Upload drone image: </b>
          </label>
          <div className="col-4 col-form-label">
            <div className="col-12">
              <input type="file" name="dronePic" className="form-control" />
              <br />
            </div>
          </div>
        </div>
        <input type="hidden" name="type" value="new" />
        <input type="hidden" name="approved" value="true" />
        <input
          className="btn btn-primary mt-3 col-2 ms-auto"
          type="submit"
          value="Add Drone"
        />
      </form>
    </>
  );
}

/*

import axios from "axios";
import { useState } from "react";
import Admin from "./admin";
import CheckSession from "./checksession";
import Login from "./login";
import Logout from "./logout";

export default function AddDrone() {
  let adminstatus = JSON.parse(sessionStorage.getItem("admin"));


  async function handleSubmit(e) {
    e.preventDefault();
    let formobj = document.getElementById("myform");
    const formData = new FormData(formobj);
    alert(JSON.stringify(formData));
    await axios
      .post("http://localhost:8080/uploaddronepic", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
      });
  }
  console.log("admin page");
  if (adminstatus == null || adminstatus === false) return <Logout />;

  return (
    <>
      <div>Page for Adding the drone</div>

      <form
        id="myform"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <br />
        Enter Model Name : <input type="text" name="modelName" />
        <br />
        Enter Company Name : <input type="text" name="company" />
        <br />
        Enter Price : <input type="text" name="price" />
        <br />
        Enter Rating : <input type="text" name="rating" />
        <br />
        Upload drone image : <input type="file" name="dronePic" />
        <br />
        <input type="hidden" name="type" value="new" />
        <input type="submit" value="Add Drone" />
      </form>
    </>
  );
}



*/
/*


 <form onSubmit={add} method="post">
        Enter Model Name :{" "}
        <input
          type="text"
          name="modelName"
          value={dronedata.modelName}
          onChange={change}
        />
        <br />
        Enter Company Name :{" "}
        <input
          type="text"
          name="company"
          value={dronedata.company}
          onChange={change}
        />
        <br />
        Enter Price :{" "}
        <input
          type="text"
          name="price"
          value={dronedata.price}
          onChange={change}
        />
        <br />
        Enter Rating :{" "}
        <input
          type="text"
          name="rating"
          value={dronedata.rating}
          onChange={change}
        />
        <br />
        Upload drone image :{" "}
        <input
          type="file"
          name="dronePic"
          value={dronedata.dronePic}
          onChange={change}
          formEncType="multipart/form-data"
        />
        <br />
        <input type="submit" value="Add Drone" />
      </form>

*/

/*

//Functional Code:

export default function AddDrone() {
  const [dronedata, setdronedata] = useState({
    modelName: "",
    company: "",
    price: "",
    rating: "",
    dronePic: "",
  });

  const [file, setFile] = useState();
  const [id, setId] = useState();

  const [addDrone, setaddDrone] = useState({});

  function handleOnChange(e) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  function change(e) {
    console.log(e.target.value);
    setId(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(file));
    let res = await uploadFile(file);
    //console.log(res.data.name);
  }

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("dronePic", file);
    formData.append("droneId", id);

    return await axios
      .post("http://localhost:8080/uploaddronepic", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert(JSON.stringify(response.data));
      });
  };

  return (
    <>
      <div>Page for Adding the drone</div>

      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <br />
        Enter DroneId : <input type="text" name="droneId" onChange={change} />
        <br />
        Upload drone image :{" "}
        <input
          type="file"
          name="dronePic"
          onChange={handleOnChange}
          formEncType="multipart/form-data"
        />
        <br />
        <input type="submit" value="Add Drone" />
      </form>
    </>
  );
}

*/
