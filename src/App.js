import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import coursedata from "./coursedata";
import Course from "./components/course";

function App() {
  const [courseData, setCourseData] = useState(coursedata);
  const [course, setCourse] = useState([]);
  // Add Course Handeling
  const addCourseHandler = (enrolledCourse) => {
    const newCourse = [...course, enrolledCourse];
    setCourse(newCourse);
  };
  //Delete Course Handeling
  const deleteCourseHandle = (deletedCourse) => {
    let newCourse = course.filter((data) => data !== deletedCourse);
    setCourse(newCourse);
    console.log("Triggerd");
  };
  return (
    <React.Fragment>
      <Header count={course.length} />
      <Course
        courseData={courseData}
        course={course}
        addCourseHandler={addCourseHandler}
        deleteCourseHandle={deleteCourseHandle}
      />
    </React.Fragment>
  );
}

export default App;
