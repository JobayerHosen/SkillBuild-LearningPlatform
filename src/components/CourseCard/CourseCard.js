import React from "react";
import { Alert, Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const CourseCard = ({ course }) => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-5">
      <Card className="p-2 shadow border-0" style={{ width: "100%" }}>
        <Card.Img variant="top" src={course.cover} />
        <Card.Body className="ps-1 text-start">
          <div className="d-flex justify-content-between">
            <Alert className="rounded-pill py-1 mt-0 mb-1" variant="success">
              Design
            </Alert>
            <p className="fw-bold">
              {course.enrolled}
              <span className="text-muted"> Enrolled</span>
            </p>
          </div>
          <Card.Title className=" fs-6 fw-bolder">{course.title}</Card.Title>
          <div className="d-flex justify-content-between">
            <small className="text-muted">
              <i className="bi bi-clock-fill text-danger mx-2"></i>
              {course.duration}
            </small>
            <small className="text-muted">
              <i className="bi bi-camera-video-fill text-success mx-2"></i>
              {course.lectures} Lectures
            </small>
            <small className="text-muted">
              <i className="bi bi-reception-4 text-warning mx-2"></i>
              {course.level}
            </small>
          </div>
        </Card.Body>
        <Card.Footer className="bg-white d-flex justify-content-between pb-0">
          <p className="fw-bold text-muted fs-5">{course.instructor}</p>
          <h4>
            $<span className="text-success fw-bold">{course.price}</span>
          </h4>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CourseCard;
