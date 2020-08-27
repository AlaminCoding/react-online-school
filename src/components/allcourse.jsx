import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
const AllCourse = (props) => {
  const { courseData, addCourseHandler, course } = props;
  //Formating Column Size
  let outerColSize = 12;
  let innerColSize = 3;
  function formatOuterColSize() {
    return course.length ? (outerColSize = 9) : (outerColSize = 12);
  }
  function formatInnerColSize() {
    return course.length ? (innerColSize = 4) : (innerColSize = 3);
  }
  return (
    <React.Fragment>
      <Col md={formatOuterColSize()} className="all-course-col">
        <Row>
          {courseData.map((data) => (
            <Col md={formatInnerColSize()} xs={6}>
              <div className="course-box">
                <img src={data.image} alt="Course Cover" />
                <h2>{data.name}</h2>
                <p className="mentor">{data.mentor}</p>
                <p className="price">${data.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="" onClick={() => addCourseHandler(data)}>
                    <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                    Enroll Now
                  </Button>
                  <p className="m-0">Duration: {data.duration}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default AllCourse;
