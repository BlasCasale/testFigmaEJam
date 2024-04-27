import React from 'react'
import './ThickContainer.css'

const ThickContainer = () => {
  return (
    <div className='containerThick'>
      <div className='minBox'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8L5.99529 12L14 4" stroke="#2C7EF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className='pInfoThick'>Negative Ion Technology may <span className='spanInfoThick'>help with allergens</span></p>
      </div>

      <div className="minBox">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8L5.99529 12L14 4" stroke="#2C7EF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className='pInfoThick'>Designed for <span className='spanInfoThick'>air rejuvenation</span></p>
      </div>

      <div className="minBox">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8L5.99529 12L14 4" stroke="#2C7EF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className='pInfoThick'><span className='spanInfoThick'>Perfect for every room </span>in all types of places.</p>
      </div>
    </div>
  )
}

export default ThickContainer