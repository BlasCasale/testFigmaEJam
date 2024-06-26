import React from 'react'
import './StepsBuy.css'
import MinCompStepsBuy from '../MinCompStepsBuy/MinCompStepsBuy'

const StepsBuy = () => {
  return (
    <div className='boxStepsBuy'>
      <MinCompStepsBuy
        message={'Step 1 : Cart Review'}
        svg={
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10" r="9" fill="#85BF55" stroke="#85BF55" strokeWidth="2" />
            <path d="M5.49976 10.5L8.82917 14L15.4998 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        boolean={false}
      />


      <MinCompStepsBuy
        message={'Step 2 : Checkout'}
        svg={
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10" r="9" fill="#85BF55" stroke="#85BF55" strokeWidth="2" />
            <path d="M5.49976 10.5L8.82917 14L15.4998 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        boolean={false}
      />

      <MinCompStepsBuy
        message={'Step 3 : Special Offer'}
        svg={
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.1666" cy="10" r="9" fill="#2C7EF8" stroke="#2C7EF8" strokeWidth="2" />
            <path d="M9.85563 15.203C9.35629 15.203 8.89663 15.1143 8.47663 14.937C8.05663 14.7597 7.69496 14.5077 7.39163 14.181C7.08829 13.8497 6.86663 13.4553 6.72663 12.998L7.70663 12.704C7.87463 13.2033 8.14996 13.5813 8.53263 13.838C8.91996 14.0947 9.35629 14.2183 9.84163 14.209C10.2896 14.1997 10.6746 14.0993 10.9966 13.908C11.3233 13.7167 11.573 13.4507 11.7456 13.11C11.9183 12.7693 12.0046 12.375 12.0046 11.927C12.0046 11.241 11.804 10.6903 11.4026 10.275C11.006 9.855 10.481 9.645 9.82763 9.645C9.64563 9.645 9.45429 9.67067 9.25363 9.722C9.05296 9.76867 8.86629 9.83633 8.69363 9.925L8.17563 9.106L12.0956 5.487L12.2636 5.907H7.12563V4.92H12.9496V5.921L9.53363 9.183L9.51963 8.777C10.2196 8.68833 10.8356 8.76767 11.3676 9.015C11.8996 9.26233 12.315 9.64033 12.6136 10.149C12.917 10.653 13.0686 11.2457 13.0686 11.927C13.0686 12.571 12.9286 13.1403 12.6486 13.635C12.3733 14.125 11.993 14.51 11.5076 14.79C11.0223 15.0653 10.4716 15.203 9.85563 15.203Z" fill="white" />
          </svg>
        }
        boolean={true}
      />

      <MinCompStepsBuy
        message={'Step 4 : Confirmation'}
        svg={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9.5" stroke="#2C7EF8" />
            <path d="M11.418 15V13.047H6.7V12.067L10.074 4.92004H11.229L7.855 12.067H11.418V9.12704H12.454V12.067H13.553V13.047H12.454V15H11.418Z" fill="#2C7EF8" />
          </svg>
        }
        boolean={false}
      />

    </div>
  )
}

export default StepsBuy