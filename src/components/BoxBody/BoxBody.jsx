import React from 'react'
import UpperText from '../UpperText/UpperText'
import StepsBuy from '../StepsBuy/StepsBuy'
import MiddleText from '../MiddleText/MiddleText'
import BigImage from '../BigImage/BigImage'
import './BoxBody.css'

const BoxBody = () => {
  return (
    <div className='boxBody'>
      <UpperText />
      <StepsBuy />
      <MiddleText />
      <BigImage />

    </div>
  )
}

export default BoxBody