import React from 'react'
import './Header.css'
import Cars from '../images/Cars.jpeg'

function Header() {
  return (
    <div className='header'>
      <img className='headerIMG' src={Cars} alt='' />
      <h1 className='easyBidIntro'>Welcome to EasyBid!</h1>
    </div>
  )
}

export default Header