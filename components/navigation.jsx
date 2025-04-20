import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = ({ onLogout }) => {
  return (
    <Navbar
      style={{
        marginTop: "0",
        backgroundColor: "rgb(34,139,34)",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Navbar.Brand href="/home" style={{ color: "white", fontWeight: "bold" }}>
        PaisaVault
      </Navbar.Brand>
      <Nav
        className="w-100 d-flex justify-content-between"
        style={{ padding: "0 10px" }}
      >
        <Nav.Link as={NavLink} to="/home" style={{ color: "white", fontWeight: "bold" }}>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/gettingstarted" style={{ color: "white", fontWeight: "bold" }}>
          Getting Started
        </Nav.Link>
        <Nav.Link as={NavLink} to="/income" style={{ color: "white", fontWeight: "bold" }}>
          Income
        </Nav.Link>
        <Nav.Link as={NavLink} to="/expense" style={{ color: "white", fontWeight: "bold" }}>
          Expenses
        </Nav.Link>
        <Nav.Link as={NavLink} to="/performance" style={{ color: "white", fontWeight: "bold" }}>
          Performance
        </Nav.Link>
        <Nav.Link as={NavLink} to="/bot" style={{ color: "white", fontWeight: "bold" }}>
          Chatbot
        </Nav.Link>
        <Nav.Link as={NavLink} to="/analysis" style={{ color: "white", fontWeight: "bold" }}>
          Analysis
        </Nav.Link>
        <Nav.Link as={NavLink} to="/education" style={{ color: "white", fontWeight: "bold" }}>
          Education
        </Nav.Link>
        <Nav.Link as={NavLink} to="/settings" style={{ color: "white", fontWeight: "bold" }}>
          Settings
        </Nav.Link>
        <Nav.Link style={{ color: "white", fontWeight: "bold", cursor: "pointer" }} onClick={onLogout}>
          Sign Out
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
