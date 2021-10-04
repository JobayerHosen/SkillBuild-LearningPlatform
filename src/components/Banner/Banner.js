import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="banner-text d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-start align-items-center">
          <h1 className="fw-bold fs-1">
            Crack UPSC CSE - GS With World's <br /> Largest Learning Platform
          </h1>
          <p className="text-muted w-75 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <InputGroup className="w-75 " size="lg">
            <FormControl
              aria-label="Large"
              placeholder="Search Courses Here"
              aria-describedby="inputGroup-sizing-sm"
            />
            <InputGroup.Text className="btn-success" id="inputGroup-sizing-lg">
              Search Course
            </InputGroup.Text>
          </InputGroup>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
