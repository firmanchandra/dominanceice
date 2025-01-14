import React from 'react'
import BackProductSolution from "../common/back/BackProductSolution"
import ProductSolutionCard from './ProductSolutionCard'
import ProductSolutionCard2 from './ProductSolutionCard2'



const ProductSolutionHome = () => {
    return (
        <>
          <BackProductSolution title='Explore Product and Solution' />
          <ProductSolutionCard />
          <ProductSolutionCard2 />
        </>
      )
}

export default ProductSolutionHome