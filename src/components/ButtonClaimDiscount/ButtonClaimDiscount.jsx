import React from 'react'
import './ButtonClaimDiscount.css'

const ButtonClaimDiscount = () => {
  return (
    <div className='greenBox'>
      <div className='minorBoxGreen'>
        <p className='pMinBox'>YES - CLAIM MY DISCOUNT</p>
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1988 8.19875C13.5847 7.81284 13.5847 7.18716 13.1988 6.80125L6.90998 0.512475C6.52407 0.126565 5.89839 0.126565 5.51248 0.512475C5.12657 0.898386 5.12657 1.52407 5.51248 1.90998L11.1025 7.5L5.51248 13.09C5.12657 13.4759 5.12657 14.1016 5.51248 14.4875C5.89839 14.8734 6.52407 14.8734 6.90998 14.4875L13.1988 8.19875ZM0.5 8.48819H12.5V6.51181H0.5V8.48819Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}

export default ButtonClaimDiscount