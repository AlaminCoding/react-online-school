import React from "react";
import AllCourse from "./allcourse";
import EnrollCourse from "./enrollcourse";
import { Row, Container } from "react-bootstrap";
const Course = (props) => {
  return (
    <React.Fragment>
      <section className="course-section">
        <Container fluid>
          <Row>
            <EnrollCourse
              course={props.course}
              deleteCourseHandle={props.deleteCourseHandle}
            />
            <AllCourse
              course={props.course}
              courseData={props.courseData}
              addCourseHandler={props.addCourseHandler}
            />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Course;
