import React from 'react'
import "./partner.css"
import { partner } from "../../dummydata"
import Heading from "../common/heading/Heading"

const PartnerCard = () => {
  return (
    <>
      <section className='partner'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {partner.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PartnerCard