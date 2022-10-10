import React, { useContext } from "react";
import { CousreContext } from "../../Root";
import SingleCours from "../singleCourse/SingleCours";
import "./Courses.css";

const Course = () => {
  const courses = useContext(CousreContext);
  // console.log(courses.data)
  return (
    <div className="container">
      <h1>Total Course {courses.data.length}</h1>
      <div className="course-container">
        {courses.data.map((course) => (
          <SingleCours key={course.id} course={course}></SingleCours>
        ))}
      </div>
    </div>
  );
};

export default Course;