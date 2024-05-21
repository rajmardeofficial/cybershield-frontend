import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function NavBarComp() {
  const [access, setAccess] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if(token){
      setAccess(true);
    }
  }, []);

  const handlelogout = async() => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("userId")
    // localStorage.removeItem("username");
    localStorage.clear()
    setAccess("")
  }
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="justify-content-between"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          width: "100%",
          position: "top fixed",
          zIndex: "1000",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            src="../logo.png"
            width="413.24"
            height="121.26"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link
              href="#home"
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              Cyber Tips
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              Cyber News
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href={access?"/chatwithAvct":"/signIn"}
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              Chat With Advocates
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              Talk To Advocates
            </Nav.Link>
          {!access?  <NavDropdown
              title={
                <>
                  <span style={{ color: "white" }}>Login</span>
                  <img
                    src="./Login.png"
                    alt="Arrow"
                    style={{ width: "25px", height: "25px", marginLeft: "5px" }}
                  />
                </>
              }
              id="basic-nav-dropdown"
              style={{
                color: "white",
                width: "120px",
                height: "50px",
                background: "#00DE93",
                borderRadius: "15px",
                fontWeight: 700,
                fontSize: "20px",
                textAlign: "center",
                marginLeft: "10px",
                marginRight: "60px",
              }}
            >
              <style>
                {`
                .nav-link::after {
                  border-color: white transparent transparent;
                }
              `}
              </style>
              <NavDropdown.Item href="/SignUp" style={{ fontWeight: 700 }}>
                User Signup
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signIn" style={{ fontWeight: 700 }}>
                User Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3" style={{ fontWeight: 700 }}>
                Expert Registration
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3" style={{ fontWeight: 700 }}>
                Expert Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{ fontWeight: 700 }}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>: <Nav.Link onClick={handlelogout} className="bg-primary text-white rounded">Log out</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarComp;
