import React from "react";
import { NavLink } from "react-router-dom";
import "../Navigation.css";

const MainNav = ({ handleLogout }) => (
  <nav className="nav">
    <ul className="nav-links">
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/gettingstarted">Getting Started</NavLink></li>
      <li><NavLink to="/income">Income</NavLink></li>
      <li><NavLink to="/expense">Expense</NavLink></li>
      <li><NavLink to="/bot">Bot</NavLink></li>
      <li><NavLink to="/performance">Performance</NavLink></li>
      <li><NavLink to="/analysis">Analysis</NavLink></li>
      <li><NavLink to="/education">Education</NavLink></li>
      <li><NavLink to="/settings">Settings</NavLink></li>
      <li><NavLink to="/signout" onClick={handleLogout}>Sign Out</NavLink></li>
    </ul>
  </nav>
);

export default MainNav;
