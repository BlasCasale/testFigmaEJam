import React, { useEffect, useState } from 'react'
import ButtonClaimDiscount from '../ButtonClaimDiscount/ButtonClaimDiscount'
import BoxCardShipping from '../BoxCardShipping/BoxCardShipping'
import './BoxClaimDiscount.css'
import MethodPayment from '../MethodPayment/MethodPayment'

const BoxClaimDiscount = () => {

  const [boolean, setBoolean] = useState(false)



  useEffect(() => {
    const pixels = window.innerWidth

    if (pixels >= 1500) setBoolean(!boolean)
    else setBoolean(false)
  }, [])

  return (
    <div className='boxClaimDiscount'>
      <ButtonClaimDiscount />
      <div className='borderedBox'>
        <BoxCardShipping />
        {
          boolean ?
            <svg width="1" height="17" viewBox="0 0 1 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="0.5" x2="0.5" y2="16.5" stroke="#CFCFCF" />
            </svg>
            :
            <svg width="290" height="1" viewBox="0 0 290 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="0.5" x2="289.5" y2="0.5" stroke="#CFCFCF" />
            </svg>
        }
        <MethodPayment />
      </div>
      <p className='pRed'>No thanks, I don’t want this.</p>
    </div>
  )
}

export default BoxClaimDiscount