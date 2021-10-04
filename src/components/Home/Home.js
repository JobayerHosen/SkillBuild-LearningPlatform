import React, { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import CourseCard from "../CourseCard/CourseCard";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);

  // FETCH COURSE LIST FROM LOCAL FILES
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <Banner></Banner>

      {/* FEATURED COURSE SECTION  */}
      <div className="section-title">
        <h3 className="fw-bold">
          Explore Featured <span className="text-success">Courses</span>
        </h3>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <Container>
        {/* FILTER OUT FIRST 6 COURSE FROM ALL COURSES  */}
        <Row>
          {courses
            .filter((course) => course.id <= 6)
            .map((course) => (
              <CourseCard course={course}></CourseCard>
            ))}
        </Row>
      </Container>
      <div className="section-title ">
        <Alert className="w-50" variant="success">
          <Link className="text-decoration-none text-success" to="/courses">
            Explore More Courses
          </Link>
        </Alert>
      </div>

      {/* HOW IT WORKS SECTION  */}
      <div className="section-title">
        <h3 className="fw-bold">
          <span className="text-success">How </span>
          It Works ?
        </h3>
        <p className="text-muted">It's never been essier to this few steps. just get into it .</p>
      </div>
      <Container>
        <div className="img-text-duo">
          <div className="img m-4 w-50">
            <img src="/images/pexels-st.jpg" alt="" />
          </div>
          <div className="text me-4">
            <ol className="list-unstyled p-0">
              <li className="d-flex align-items-start my-2 my-md-3">
                <div className="rounded-circle p-3 d-flex align-items-center justify-content-center bg-success">
                  <div className="position-absolute text-white fs-5 mb-0">1</div>
                </div>
                <div className="text-start ms-3">
                  <h4>Create account</h4>
                  <p className="text-muted">
                    <small>
                      Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </small>
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start my-2 my-md-3">
                <div className="rounded-circle p-3 d-flex align-items-center justify-content-center bg-success">
                  <div className="position-absolute text-white fs-5 mb-0">2</div>
                </div>
                <div className="text-start ms-3">
                  <h4>Start Learning</h4>
                  <p className="text-muted">
                    <small>
                      Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </small>
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start my-2 my-md-3">
                <div className="rounded-circle p-3 d-flex align-items-center justify-content-center bg-success">
                  <div className="position-absolute text-white fs-5 mb-0">3</div>
                </div>
                <div className="text-start ms-3">
                  <h4>Get Certified</h4>
                  <p className="text-muted">
                    <small>
                      Oluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                    </small>
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
