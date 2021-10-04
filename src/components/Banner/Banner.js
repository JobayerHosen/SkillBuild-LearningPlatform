import React, { useState } from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Banner.css";

const Banner = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    if (search) history.push(`/courses/search/${search}`);
  };
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

          <form className="search-bar" onSubmit={handleSearch}>
            <InputGroup className="w-100 " size="lg">
              <FormControl
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Large"
                required
                placeholder="Search Courses Here"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Text
                type="submit"
                onClick={handleSearch}
                className="btn-success"
                id="inputGroup-sizing-lg"
              >
                Search
              </InputGroup.Text>
            </InputGroup>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
