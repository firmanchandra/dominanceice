import React from 'react'
import Back from "../common/back/Back"
import PartnerCard from './PartnerCard'
import ClientCard from './ClientCard'


const PartnerClientHome = () => {
    return (
        <>
          <Back title='Explore Courses' />
          <PartnerCard />
          <ClientCard />
        </>
      )
    }

export default PartnerClientHome