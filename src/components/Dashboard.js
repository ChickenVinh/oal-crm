import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Dashboard() {
  return (
    <Container>
      <h1>Hello, you signed in successfully!</h1>
      <Link to="/addUser" className="btn btn-primary">
        add User
      </Link>
    </Container>
  );
}

export default Dashboard;
