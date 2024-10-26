import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Dronebiz from "../dronebiz";

export default function Navigation() {
  let customerstatus = JSON.parse(sessionStorage.getItem("customer"));
  let adminstatus = JSON.parse(sessionStorage.getItem("admin"));
  let navigate = useNavigate();

  const navlogout = () => navigate("/logout");
  const navlogin = () => navigate("/login");
  const navRegister = () => navigate("/register");
  const navAbout = () => navigate("/about");
  const navContact = () => navigate("/contact");
  const navHome = () => navigate("/home");
  const navMyProfile = () => navigate("/myProfile");

  /*

{preLoginList.includes(location.pathname) && (
        <div>
          <Link to="/login">Login </Link>
          <Link to="/register">Register |</Link>
          <Link to="/register">Register |</Link>
        </div>
      )}

      {!preLoginList.includes(location.pathname) && (
        <div>
          <Link to="/welcome-home">Home | </Link>
          <Link to="/welcome-home">Expore | </Link>
          <Link to="/welcome-home">Messages </Link>
        </div>
      )}



*/

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-primary">
            Dronebiz Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-warning" onClick={navHome}>
                Home
              </Nav.Link>
              <Nav.Link className="text-warning" onClick={navContact}>
                Contact
              </Nav.Link>
              <Nav.Link className="text-warning" onClick={navAbout}>
                About
              </Nav.Link>
              {customerstatus ? (
                <Nav.Link className="text-warning" onClick={navMyProfile}>
                  MyProfile
                </Nav.Link>
              ) : (
                <Nav.Link className="text-warning" onClick={navRegister}>
                  Register
                </Nav.Link>
              )}

              {customerstatus || adminstatus ? (
                <Nav.Link className="text-warning" onClick={navlogout}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link className="text-warning" onClick={navlogin}>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {(customerstatus || adminstatus) && (
        <strong className="">
          <div className="text-start">
            {customerstatus ? (
              <div className="p-1 me-5 text-light">
                Logged in as :<span className="text-warning"> Customer</span>
              </div>
            ) : (
              <div className="p-1 me-5 justify-content-end">
                Logged in as : <span className="text-warning"> Admin</span>
              </div>
            )}
            <div className="p-1 me-5 justify-content-start text-light">
              Name :{" "}
              <span className="text-warning">
                {" "}
                {sessionStorage.getItem("loggedInName")}
              </span>
            </div>
          </div>
        </strong>
      )}
    </>
  );
}

/*

       <div className="d-flex flex-column ">
          {customerstatus ? (
            <div className="me-4 justify-content-end">
              Logged in as : Customer
            </div>
          ) : (
            <div className="me-4 justify-content-end">Logged in as : Admin</div>
          )}
          <div className="me-4 justify-content-end">
            Name : {sessionStorage.getItem("loggedInName")}
          </div>
        </div>






*/
