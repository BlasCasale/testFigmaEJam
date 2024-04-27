import React from 'react'
import StepsBuy from '../StepsBuy/StepsBuy'
import MiddleText from '../MiddleText/MiddleText'
import BigImage from '../BigImage/BigImage'
import BoxInfo from '../BoxInfo/BoxInfo'
import ThickContainer from '../ThickContainer/ThickContainer'
import BoxDiscount from '../BoxDiscount/BoxDiscount'
import BoxClaimDiscount from '../BoxClaimDiscount/BoxClaimDiscount'
import BoxAccordance from '../BoxAccordance/BoxAccordance'
import Review from '../Review/Review'
import './BoxBody.css'

const BoxBody = () => {
  return (
    <main>
      <StepsBuy />
      <div className='boxBody'>
        <div className='boxInfo'>
          <MiddleText />
          <BoxInfo />
          <ThickContainer />
          <BoxDiscount />
          <BoxClaimDiscount />
          <BoxAccordance />
        </div>
        <BigImage />
        <Review />
      </div>
    </main>
  )
}

export default BoxBody