import React from 'react'
import "./courses2.css"
import { online2 } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses2 = () => {
    return (
        <>
          <section className='online2'>
            <div className='container'>
              {/* <Heading subtitle='COURSES' title='Browse Our Online Courses' /> */}
              <Heading subtitle='Our Client' />
              <div className='content grid3'>
                {online2.map((val) => (
                  <div className='box'>
                    {/* <div className='img'>
                      <img src={val.cover} />
                      <img src={val.hoverCover} alt='' className='show' />
                    </div> */}
                    <h1>{val.courseName}</h1>
                    {/* <span>{val.course}</span> */}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )
    }

export default OnlineCourses2