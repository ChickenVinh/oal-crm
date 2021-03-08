import { useState } from "react";
import firebase from "firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    console.log(email);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <h1>Sign In</h1>
      <Form
        onSubmit={(event) =>
          signInWithEmailAndPasswordHandler(event, email, password)
        }
      >
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email eingeben"
            name="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Passwort:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Passwort eingeben"
            name="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default SignIn;
