import { useState } from 'react'
import DaysSatisfaction from './Cartels/DaysSatisfaction/DaysSatisfaction'
import FreeDelivery from './Cartels/FreeDelivery/FreeDelivery'
import HappyCustomers from './Cartels/HappyCustomers/HappyCustomers'
import MoneyBack from './Cartels/MoneyBack/MoneyBack'
import './TopHeader.css'

const TopHeader = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const incrementIndex = () => {
    if (currentIndex < 3) setCurrentIndex(currentIndex + 1)
    else setCurrentIndex(0)
  }

  const decrementIndex = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
    else setCurrentIndex(3)
  }


  return (
    <div className='divTopHeader'>

      {/* arrow left */}
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='hiddenVector' onClick={incrementIndex}>
        <path d="M7.75 1.50781L6.94141 0.75L0.25 7L6.94141 13.25L7.75 12.4961L1.87109 7L7.75 1.50781Z" fill="white" />
      </svg>

      {/* middle components */}
      <DaysSatisfaction style={currentIndex == 0 ? '' : 'hidden'} />
      <FreeDelivery style={currentIndex == 1 ? '' : 'hidden'} />
      <HappyCustomers style={currentIndex == 2 ? '' : 'hidden'} />
      <MoneyBack style={currentIndex == 3 ? '' : 'hidden'} />
      {/* arrow rigth */}

      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='hiddenVector' onClick={decrementIndex}>
        <path d="M6.25 4.50781L7.05859 3.75L13.75 10L7.05859 16.25L6.25 15.4961L12.1289 10L6.25 4.50781Z" fill="white" />
      </svg>

    </div>
  )
}

export default TopHeader