import React from 'react'
import './BoxCardShipping.css'

const BoxCardShipping = () => {
  return (
    <div className='boxShipping'>
      <p className='pShipping'>Free shipping</p>
      <svg width="2" height="15" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0.5" x2="1" y2="14.5" stroke="#CFCFCF" />
      </svg>
      <div className='minorBoxShipping'>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_74_189)">
            <path d="M9.625 5.99902H2.625C2.07272 5.99902 1.625 6.44674 1.625 6.99902V10.499C1.625 11.0513 2.07272 11.499 2.625 11.499H9.625C10.1773 11.499 10.625 11.0513 10.625 10.499V6.99902C10.625 6.44674 10.1773 5.99902 9.625 5.99902Z" stroke="#696969" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.62598 5.99902V3.99902C3.62598 3.33598 3.88937 2.7001 4.35821 2.23126C4.82705 1.76242 5.46294 1.49902 6.12598 1.49902C6.78902 1.49902 7.4249 1.76242 7.89374 2.23126C8.36258 2.7001 8.62598 3.33598 8.62598 3.99902V5.99902" stroke="#696969" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_74_189">
              <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)" />
            </clipPath>
          </defs>
        </svg>

        <p className='pShipping'>Secure 256-bit SSL encryption</p>
      </div>
    </div>
  )
}

export default BoxCardShipping