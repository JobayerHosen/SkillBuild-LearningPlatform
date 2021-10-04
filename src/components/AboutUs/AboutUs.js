import React from "react";
import { Alert, Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="section-title">
          <h1 className="fw-bold">
            Who <span className="text-success"> We </span> Are
          </h1>
          <p className="text-muted">
            Whether you want to learn or to share what you know, you’ve come to the right place. As
            a global destination for online learning, we connect people through knowledge.
          </p>
        </div>
      </Container>

      <Container>
        <div className="img-text-duo">
          <div className="text me-4">
            <small className="text-success">About Us</small>
            <h2 className="fs-2 fw-bold">What We Do & Our Aim</h2>
            <p className="text-muted">
              We help organizations of all types and sizes prepare for the path ahead — wherever it
              leads. Our curated collection of business and technical courses help companies,
              governments, and nonprofits go further by placing learning at the center of their
              strategies.
            </p>

            <ol className="list-unstyled p-0">
              <li className="d-flex align-items-start my-2 my-md-3">
                <div className="text-start  fs-6 fw-bold">
                  <Alert className="d-inline rounded-circle p-0 px-1 me-3" variant="success">
                    <i class="bi bi-check-circle"></i>
                  </Alert>
                  <span>Full Lifetime Access</span>
                </div>
              </li>
              <li className="d-flex align-items-start my-2 my-md-3">
                <div className="text-start  fs-6 fw-bold">
                  <Alert className="d-inline rounded-circle p-0 px-1 me-3" variant="success">
                    <i class="bi bi-check-circle"></i>
                  </Alert>
                  <span>20+ Downloadable Resources</span>
                </div>
              </li>
              <li className="d-flex align-items-start my-2 my-md-3">
                <div className="text-start  fs-6 fw-bold">
                  <Alert className="d-inline rounded-circle p-0 px-1 me-3" variant="success">
                    <i class="bi bi-check-circle"></i>
                  </Alert>
                  <span>Certificate Of Completion</span>
                </div>
              </li>
              <li className="d-flex align-items-start my-2 my-md-3">
                <div className="text-start  fs-6 fw-bold">
                  <Alert className="d-inline rounded-circle p-0 px-1 me-3" variant="success">
                    <i class="bi bi-check-circle"></i>
                  </Alert>
                  <span>Free Trial 7 Days</span>
                </div>
              </li>
            </ol>
          </div>
          <div className="img w-50">
            <img src="/images/lmp-2.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
