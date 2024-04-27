import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='firstBoxFooter'>
        <p className='pFooter'>Copyright (c) 2023</p>
        <svg width="2" height="15" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="0.5" x2="1" y2="14.5" stroke="white" />
        </svg>
        <p className='pFooter'>Clarifionsupport@clarifion.com</p>
      </div>

      <div className='secondBoxFooter'>
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3854 5.95728H2.80208C2.20377 5.95728 1.71875 6.4423 1.71875 7.04061V10.8323C1.71875 11.4306 2.20377 11.9156 2.80208 11.9156H10.3854C10.9837 11.9156 11.4688 11.4306 11.4688 10.8323V7.04061C11.4688 6.4423 10.9837 5.95728 10.3854 5.95728Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.88672 5.95728V3.79061C3.88672 3.07231 4.17206 2.38344 4.67997 1.87553C5.18788 1.36762 5.87676 1.08228 6.59505 1.08228C7.31335 1.08228 8.00222 1.36762 8.51013 1.87553C9.01804 2.38344 9.30339 3.07231 9.30339 3.79061V5.95728" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="pFooter">Secure 256-bit SSL encryption.</p>
      </div>
    </footer>
  )
}

export default Footer