import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark text-muted py-3">
      <Container className="py-5 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-start align-items-center">
          <h1 className="fw-bold fs-1">
            {" "}
            <span className="text-success">Skill</span>Build
          </h1>
          <p className="text-muted w-75 text-center">
            Subscribe to our newsleter to always get updated about our new comprehensive courses
          </p>
          <InputGroup className="w-75 " size="lg">
            <FormControl
              aria-label="Large"
              placeholder="type your email"
              aria-describedby="inputGroup-sizing-sm"
            />
            <InputGroup.Text className="btn-success" id="inputGroup-sizing-lg">
              Subscribe
            </InputGroup.Text>
          </InputGroup>
        </div>
      </Container>
      <p>Copyright &copy; 2021 | SkillBuild.io</p>
    </div>
  );
};

export default Footer;
