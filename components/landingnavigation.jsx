/*import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingNavigation = () => {
  return (
    <Navbar
      style={{
        marginTop: "0",
        backgroundColor: "rgb(34,139,34)",
        padding: "10px",
      }}
    >
      <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold" }}>
        <img
          src={require("../resources/logo.jpg")}
          alt="Logo"
          style={{ width: "30px", marginRight: "10px" }}
        />
        
      </Navbar.Brand>
      <Nav className="ms-auto" style={{ display: "flex", gap: "15px" }}>
        <Nav.Link href="/aboutus" style={{ color: "white", fontWeight: "bold" }}>
          About Us
        </Nav.Link>
        <Nav.Link href="/features" style={{ color: "white", fontWeight: "bold" }}>
          Features
        </Nav.Link>
        <Nav.Link href="/novelty" style={{ color: "white", fontWeight: "bold" }}>
          Novelty
        </Nav.Link>
        <Nav.Link href="/handytools" style={{ color: "white", fontWeight: "bold" }}>
          Handy Tools
        </Nav.Link>
        <Nav.Link href="/login" style={{ color: "white", fontWeight: "bold" }}>
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default LandingNavigation; */

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingNavigation = () => {
  return (
    <Navbar
      style={{
        marginTop: "0",
        backgroundColor: "rgb(34,139,34)",
        padding: "20px 10px", // Increased padding to make navbar taller
      }}
    >
      <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold" }}>
        <img
          src={require("../resources/logo.jpg")}
          alt="Logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }} // Increased width and added height for larger logo
        />
      </Navbar.Brand>
      <Nav className="ms-auto" style={{ display: "flex", gap: "15px" }}>
        <Nav.Link href="/aboutus" style={{ color: "white", fontWeight: "bold" }}>
          About Us
        </Nav.Link>
        <Nav.Link href="/features" style={{ color: "white", fontWeight: "bold" }}>
          Features
        </Nav.Link>
        <Nav.Link href="/novelty" style={{ color: "white", fontWeight: "bold" }}>
          Novelty
        </Nav.Link>
        <Nav.Link href="/handytools" style={{ color: "white", fontWeight: "bold" }}>
          Handy Tools
        </Nav.Link>
        <Nav.Link href="/login" style={{ color: "white", fontWeight: "bold" }}>
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default LandingNavigation;

