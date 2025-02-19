import React from 'react'
import "./productsolution.css"
import { productsolutionCard } from "../../dummydata"
import Heading from "../common/heading/Heading"

const ProductSolutionCard = () => {
  return (
      <>
        <section className='productsolutionCard'>
        <Heading subtitle='PRODUCT' />
          <div className='container grid2'>
            {productsolutionCard.map((val) => (
              <div className='items'>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                  </div>
                  <div className='text'>
                    <h1>{val.coursesName}</h1>
                    {/* <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <label htmlFor=''>(5.0)</label>
                    </div>
                    <div className='details'>
                      {val.courTeacher.map((details) => (
                        <>
                          <div className='box'>
                            <div className='dimg'>
                              <img src={details.dcover} alt='' />
                            </div>
                            <div className='para'>
                              <h4>{details.name}</h4>
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </>
                      ))}
                    </div> */}
                  </div>
                </div>
                <div className='price'>
                  {/* <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3> */}
                  <h3>
                    {val.priceAll}
                  </h3>
                </div>
                <button className='outline-btn'>GET IT !</button>
              </div>
            ))}
          </div>
        </section>
      </>
    )
}

export default ProductSolutionCard