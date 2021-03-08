import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function NavBar() {
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
        <div className="w-100">
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        <Nav>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <NavDropdown title="Kunde">
            <NavDropdown.Item>
              {" "}
              <Link to="/addCustomer" className="nav-link">
                Kunde hinzufügen
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link to="/addDocument" className="nav-link">
                Dokument hinzufügen
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link to="/manageCustomer" className="nav-link">
                Kunden verwalten
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={currentUser.email}>
            <NavDropdown.Item>Einstellungen</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </Container>
  ) : (
    <></>
  );
}

export default NavBar;
