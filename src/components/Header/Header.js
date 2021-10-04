import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    // REACT-BOOTSTRAP NAVBAR COMPONENT
    <Navbar
      className="shadow-sm"
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link className="fw-bolder fs-2 text-decoration-none text-dark" to="/home">
            <span className="text-success">Skill</span>Build
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-3">
            <NavLink
              to="/home"
              className="nav-menu"
              activeStyle={{
                fontWeight: "bold",
                color: "#4caf50",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className="nav-menu"
              activeStyle={{
                fontWeight: "bold",
                color: "#4caf50",
              }}
            >
              Courses
            </NavLink>
            <NavLink
              to="/faq"
              className="nav-menu"
              activeStyle={{
                fontWeight: "bold",
                color: "#4caf50",
              }}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/about"
              className="nav-menu"
              activeStyle={{
                fontWeight: "bold",
                color: "#4caf50",
              }}
            >
              About Us
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="/signin"
              className="nav-menu"
              activeStyle={{
                fontWeight: "bold",
                color: "#4caf50",
              }}
            >
              Sign In
            </NavLink>
            <Link to="/courses">
              <Button variant="success">Get Started</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
