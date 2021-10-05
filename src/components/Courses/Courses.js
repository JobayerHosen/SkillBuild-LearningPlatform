import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const { search } = useParams();

  // FETCH ALL COURSES FROM LOCAL FILE
  useEffect(() => {
    fetch("/courses.json")
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
            As a global destination for online learning, we connect people through knowledge.
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </Container>

      {/* COURSES CARDS  */}
      <Container>
        <Row>
          {/* IF SEARCH PARAM IS EXIT THEN SHOW SEARCH RESULTS OTHERWISE SHOW ALL */}

          {!search ? (
            courses.map((course) => <CourseCard key={course.id} course={course}></CourseCard>)
          ) : (
            <></>
          )}
          {search ? (
            courses
              .filter((course) => course?.title.toLowerCase().includes(search.toLowerCase()))
              .map((course) => <CourseCard key={course.id} course={course}></CourseCard>)
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
