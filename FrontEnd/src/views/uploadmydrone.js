import axios from "axios";

export default function UploadMyDrone() {
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
  return (
    <>
      <h1>Upload my Drone</h1>
      <form
        id="myform"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <br />
        <div className="form-group row mt-2 justify-content-center">
          <label htmlFor="entermodelname" className="col-2 col-form-label">
            <b> Enter Model Name :</b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input type="text" name="modelName" />
            </div>
          </div>
        </div>
        <br />
        <div className="form-group row mt-1 justify-content-center">
          <label htmlFor="entercompanyname" className="col-2 col-form-label">
            <b>Enter Company Name: </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input type="text" name="company" />
            </div>
          </div>
        </div>
        <br />

        <div className="form-group row  justify-content-center">
          <label htmlFor="enterprice" className="col-2 col-form-label">
            <b> Enter Price : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input type="text" name="price" />
            </div>
          </div>
        </div>
        <br />
        <div className="form-group row justify-content-center">
          <label htmlFor="enterrating" className="col-2 col-form-label">
            <b> Enter Rating : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input type="text" name="rating" />
              <br />
            </div>
          </div>
        </div>

        <div className="form-group row justify-content-center">
          <label htmlFor="uploaddroneimage" className="col-2 col-form-label">
            <b> Upload drone image : </b>
          </label>
          <div className="col-3 col-form-label">
            <div className="col-2">
              <input type="file" name="dronePic" />
              <br />
            </div>
          </div>
        </div>
        <input type="hidden" name="type" value="old" />
        <input type="hidden" name="approved" value="false" />
        <input
          className="btn btn-primary mt-3"
          type="submit"
          value="Add Drone"
        />
      </form>
    </>
  );
}

/*

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function UploadMyDrone() {
  let navigate = useNavigate();

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
        navigate("/myprofile");
      });
  }
  return (
    <>
      <h1>Page for Adding the drone</h1>

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
        <input type="hidden" name="type" value="old" />
        <input type="submit" value="Add Drone" />
      </form>
    </>
  );
}


*/
