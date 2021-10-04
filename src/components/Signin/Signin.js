import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Signin = () => {
  return (
    <div>
      <Container>
        <div className="section-title">
          <h1 className="fw-bold">
            <span className="text-success"> Sign In</span>
          </h1>
        </div>
      </Container>
      <Container>
        <Form className="my-5 mx-auto text-start" style={{ width: "300px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Signin;
