import React from "react"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import OnlineCourses2 from "./OnlineCourses2"
import BackCourses from "../common/back/BackCourses"

const CourseHome = () => {
  return (
    <>
      <BackCourses title='Explore Partner & Client' />
      {/* <CoursesCard /> */}
      <OnlineCourses />
      <OnlineCourses2/>
    </>
  )
}

export default CourseHome
