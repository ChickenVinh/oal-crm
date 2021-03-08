import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <h1>Hello, you signed in successfully!</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <strong>Email:</strong> {currentUser.email}
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default Dashboard;
