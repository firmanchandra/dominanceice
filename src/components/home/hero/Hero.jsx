import React from 'react'
import Heading from "../../common/heading/Heading"
import "./hero.css"
//import './herosection.css';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            {/* <Heading subtitle='WELCOME TO DOMINANCE ICE' title='We Are The Future' /> */}
            <Heading title='WELCOME TO DOMINANCE ICE' />
            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW PRODUCT <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero