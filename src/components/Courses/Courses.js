import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  // FETCH ALL COURSES FROM LOCAL FILE
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      {/* SECTION TITLE  */}
      <Container>
        <div className="section-title">
          <h1 className="fw-bold">
            Find The Most Exciting Online<span className="text-success"> Courses</span>
          </h1>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>
        </div>
      </Container>

      {/* COURSES CARDS  */}
      <Container>
        <Row>
          {courses.map((course) => (
            <CourseCard course={course}></CourseCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
