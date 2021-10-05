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
    //BANNER SECTION
    <div className="banner">
      <Container className="banner-text d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-start align-items-center">
          <h1 className="fw-bold fs-1">
            Transform Your Life Through Education <br /> With Lergest Learning Platform
          </h1>
          <p className="text-muted w-75 text-center">
            Learners around the world are launching new careers, advancing in their fields, and
            enriching their lives.
          </p>

          {/* SEARCH FORM  */}
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
