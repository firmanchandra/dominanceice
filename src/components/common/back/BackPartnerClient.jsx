import React from 'react'
import { useLocation } from "react-router-dom"

const BackPartnerClient = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='partnerclient'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default BackPartnerClient