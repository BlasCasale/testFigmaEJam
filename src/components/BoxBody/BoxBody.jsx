import React from 'react'
import UpperText from '../UpperText/UpperText'
import StepsBuy from '../StepsBuy/StepsBuy'
import MiddleText from '../MiddleText/MiddleText'
import BigImage from '../BigImage/BigImage'
import BoxInfo from '../BoxInfo/BoxInfo'
import './BoxBody.css'
import ThickContainer from '../ThickContainer/ThickContainer'
import BoxDiscount from '../BoxDiscount/BoxDiscount'
import BoxClaimDiscount from '../BoxClaimDiscount/BoxClaimDiscount'
import BoxAccordance from '../BoxAccordance/BoxAccordance'

const BoxBody = () => {
  return (
    <div className='boxBody'>
      <UpperText />
      <StepsBuy />
      <MiddleText />
      <BigImage />
      <BoxInfo />
      <ThickContainer />
      <BoxDiscount />
      <BoxClaimDiscount />
      <BoxAccordance />
    </div>
  )
}

export default BoxBody