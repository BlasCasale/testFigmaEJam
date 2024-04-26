import React from 'react'
import './MinCompStepsBuy.css'

const MinCompStepsBuy = ({ svg, message, boolean }) => {
  return (
    <div className='boxComponentStep'>
      {svg}
      <p className={`${boolean ? 'current' : ''} pStep `}>{message}</p>
    </div>
  )
}

export default MinCompStepsBuy