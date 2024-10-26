import "../css/about.css";

export default function About() {
  return (
    <>
      <section className="section services-section bg-light" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>What WE Do</h2>
                <p>
                  WE are providing a platform for our customers to buy and sell
                  Drones with seamless experience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-desktop"></i>
                </div>
                <div className="feature-content">
                  <h5>Sell your own Products</h5>
                  <p>
                    We provide a platform for the customers to resell their
                    products.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className="feature-content">
                  <h5>Role based login</h5>
                  <p>
                    A single login page that acts as a gateway to two different
                    profiles of admin and customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-comment"></i>
                </div>
                <div className="feature-content">
                  <h5>Regular Email Updates</h5>
                  <p>
                    We keep the customer informed about their activities related
                    to the website.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-image"></i>
                </div>
                <div className="feature-content">
                  <h5>Dont worry about login.</h5>
                  <p>
                    In case if the customer forgets his password, he can use our
                    forget password feature to recover his account.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-th"></i>
                </div>
                <div className="feature-content">
                  <h5>Invoice in pdf format</h5>
                  <p>
                    On booking of the order we provide the invoice in pdf
                    format.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <i className="fa fa-cog"></i>
                </div>
                <div className="feature-content">
                  <h5>Quality products</h5>
                  <p>
                    We carefully choose and verify the products put on our
                    website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
