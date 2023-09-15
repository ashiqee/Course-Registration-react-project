import PropTypes from "prop-types";
import { useState } from "react";
import Course from "../Course_card/Course";
import { useEffect } from "react";

const Courses = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mb-12 md:w-full">
      <div className="grid gap-4 md:grid-cols-3">
        {courses.map((course) => (
          <Course
            key={course.idx}
            course={course}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleAddToCart: PropTypes.func,
};

export default Courses;
