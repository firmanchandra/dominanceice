import React from 'react'
import { organization } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./organization.css"

const Organization = () => {
    return (
        <>
          <section className='organization padding'>
            <div className='container'>
              {/* <Heading subtitle='FOUNDER & CO-FOUNDER' title='Our Successful Students' /> */}
              <Heading subtitle='FOUNDER & CO-FOUNDER' />
    
              <div className='content grid4'>
                {organization.map((val) => (
                  <div className='items shadow'>
                    <div className='box flex'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                        <i className='fa fa-quote-left icon'></i>
                      </div>
                      <div className='name'>
                        <h2>{val.name}</h2>
                        <span>{val.post}</span>
                      </div>
                    </div>
                    <p>{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )
    }

export default Organization