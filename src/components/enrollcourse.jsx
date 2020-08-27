import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
const EnrollCourse = (props) => {
  const { course, deleteCourseHandle } = props;
  //Number of total enrolled Courses
  let courseNumber = course.length;
  //Total price
  let totalPrice = 0;
  course.map((data) => (totalPrice = totalPrice + data.price));
  function formatEnrollSize() {
    return course.length ? "block" : "none";
  }
  return (
    <React.Fragment>
      <Col
        md={3}
        style={{ display: formatEnrollSize() }}
        className="enroll-courses-col"
      >
        <div className="price-box">
          <table>
            <thead>
              <tr>
                <th colSpan="2">Enrolled courses summery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Total Enroll:</th>
                <th>{courseNumber}</th>
              </tr>
              <tr>
                <th>Total Price:</th>
                <th>${totalPrice}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="enroll-course-box">
          {course.map((data) => (
            <div className="enroll-box d-flex">
              <img src={data.image} alt="Enrolled cover pic" />
              <div className="pt-3 pl-2">
                <h2>{data.name}</h2>
                <small>{data.mentor}</small>
                <p>${data.price}</p>
              </div>
              <FontAwesomeIcon
                icon={faWindowClose}
                className="delete-icon"
                onClick={() => deleteCourseHandle(data)}
              />
            </div>
          ))}
        </div>
      </Col>
    </React.Fragment>
  );
};

export default EnrollCourse;
