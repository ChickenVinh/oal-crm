import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

function Nav() {
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

  return currentUser ? (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <img src="/images/logo.svg" height="40" alt="oal logo" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <strong>Email:</strong>
          {currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="primary" onClick={handleLogout}>
            Log Out
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  ) : (
    <></>
  );
}

export default Nav;
