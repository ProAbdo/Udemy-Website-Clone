import React from "react";
import "../components_styles/CourseInfo.css";
import Requirement from "../components/Requirement";
import CourseDescription from "./CourseDescription";
function CourseInfo({ obj_data }) {
  return (
    <>
      <Requirement obj_data={obj_data} />
      <CourseDescription obj_data={obj_data} />
    </>
  );
}

export default CourseInfo;
