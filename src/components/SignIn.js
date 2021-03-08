import { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    //setLoading(false);
  }

  return (
    <Container className="mt-5">
      <img
        src="/images/logo.svg"
        className="mx-auto d-block"
        height="70"
        alt="oal logo"
      />
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group id="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email eingeben"
            ref={emailRef}
            required
          />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Passwort:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Passwort eingeben"
            ref={passwordRef}
            required
          />
        </Form.Group>
        <Button disabled={loading} type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  );
}

export default SignIn;
