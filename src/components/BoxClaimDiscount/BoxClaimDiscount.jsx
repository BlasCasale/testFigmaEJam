import React from 'react'
import ButtonClaimDiscount from '../ButtonClaimDiscount/ButtonClaimDiscount'
import BoxCardShipping from '../BoxCardShipping/BoxCardShipping'
import './BoxClaimDiscount.css'
import MethodPayment from '../MethodPayment/MethodPayment'

const BoxClaimDiscount = () => {
  return (
    <div className='boxClaimDiscount'>
      <ButtonClaimDiscount />
      <div className='borderedBox'>
        <BoxCardShipping />
        <svg width="290" height="1" viewBox="0 0 290 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="289.5" y2="0.5" stroke="#CFCFCF" />
        </svg>
        <MethodPayment />
      </div>
      <p className='pRed'>No thanks, I don’t want this.</p>
    </div>
  )
}

export default BoxClaimDiscount