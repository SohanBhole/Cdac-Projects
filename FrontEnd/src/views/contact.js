import "../css/contact.css";

export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <div class="container-fluid">
        <div class="row p-5">
          <div class="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area ">
                    <img src={require("../images/Tanmay.JPG")} alt="aneesh" />
                  </div>
                  <div className="img-text">
                    <h2>Tanmay Ghadge</h2>
                    <p>
                      Hi I'm Tanmay Ghadge. I'm currently pursuing Post Graduate
                      Diploma in CDAC Juhu, and my role in the project is I
                      worked on the front-end part.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area ">
                    <img
                      src={require("../images/mohanish.jpeg")}
                      alt="aneesh"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Mohanish Rane</h2>
                    <p>
                      Hi I'm Mohanish Rane. I'm currently pursuing Post Graduate
                      Diploma in CDAC Khaghar, and my role in the project is I
                      am the <strong>Project Lead</strong> of this project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area ">
                    <img src={require("../images/sohan.png")} alt="aneesh" />
                  </div>
                  <div className="img-text">
                    <h2>Sohan Bhole</h2>
                    <p>
                      Hi I'm Sohan Bhole. I'm currently pursuing Post Graduate
                      Diploma in CDAC Juhu, and my role in the project is that I
                      worked on the backend part.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area ">
                    <img src={require("../images/Swati.png")} alt="aneesh" />
                  </div>
                  <div className="img-text">
                    <h2>Swati Patil</h2>
                    <p>
                      Hi I'm Swati Patil. I'm currently pursuing Post Graduate
                      Diploma in CDAC Khaghar, and my role in the project is
                      that I worked on the backend part.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area ">
                    <img
                      src={require("../images/mohanish.jpeg")}
                      alt="aneesh"
                    />
                  </div>
                  <div className="img-text">
                    <h2>Siddhi Shimpi</h2>
                    <p>
                      Hi I'm Siddhi Shimpi. I'm currently pursuing Post Graduate
                      Diploma in CDAC Khaghar, and my role in the project is I
                      worked on the front-end part.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
