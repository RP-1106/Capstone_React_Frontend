import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

// Utility functions to handle CSV-like data in localStorage
const getUsersFromCSV = () => {
  const csvData = localStorage.getItem("Username-Password.csv");
  if (csvData) {
    // Convert CSV string into an object
    const rows = csvData.split("\n");
    const users = {};
    rows.forEach((row) => {
      const [username, password] = row.split(",");
      if (username && password) {
        users[username] = password;
      }
    });
    return users;
  }
  return {};
};

const saveUserToCSV = (username, password) => {
  const users = getUsersFromCSV();
  users[username] = password;

  // Convert users object back to CSV format
  const csvData = Object.entries(users)
    .map(([username, password]) => `${username},${password}`)
    .join("\n");

  // Save updated CSV data in localStorage
  localStorage.setItem("Username-Password.csv", csvData);
};

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Reset the message when switching modes
  useEffect(() => {
    setMessage("");
  }, [isCreatingAccount]);

  const handleLogin = () => {
    const users = getUsersFromCSV();

    if (users[username] === password) {
      onLogin();
      navigate("/home");
    } else if (!users[username]) {
      setMessage("Invalid username. Try again.");
    } else {
      setMessage("Invalid password. Try again.");
    }
  };

  const handleCreateAccount = () => {
    const users = getUsersFromCSV();

    if (users[newUsername]) {
      setMessage("Invalid Username. Try Again.");
    } else {
      saveUserToCSV(newUsername, newPassword);
      setMessage(
        "Username and Password successfully created. In five seconds you will be asked to enter details again -->"
      );

      // After 5 seconds, go back to the login page
      setTimeout(() => {
        setIsCreatingAccount(false);
        setUsername("");
        setPassword("");
      }, 5000);
    }
  };

  return (
    <div className="login-page">
      {/* Login Form */}
      <h2 className="title">Sign-in to existing account</h2>
      <div className="form-group">
        <label>Enter Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Enter Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="submit-button" onClick={handleLogin}>
        Submit
      </button>
      {message && <p className="message">{message}</p>}

      <p className="account-text">
        Don’t have an account?{" "}
        <span className="create-account-link" onClick={() => setIsCreatingAccount(true)}>
          Create Account
        </span>
      </p>

      {/* Create Account Form */}
      {isCreatingAccount && (
        <div className="create-account-form">
          <h3>Create Account!</h3>
          <div className="form-group">
            <label>Create Username</label>
            <input
              type="text"
              placeholder="Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Create Password</label>
            <input
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleCreateAccount}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
