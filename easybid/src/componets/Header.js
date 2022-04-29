import React from 'react'
import './Header.css'
import Cars from '../images/Cars.jpeg'
import whiteCar from '../images/whiteCar.webp'

function Header() {
  return (
    <div className='header'>
      <img className='headerIMG' src={Cars} alt='' />
      <h1 className='easyBidIntro'>Welcome to EasyBid!</h1>

      <div className='aboutHeader'>
        <p>EasyBid is an online auction venue where you can bid on and purchase items from business liquidations, equipment and machinery auctions, estate auctions and much more. Our venue has sold everything from airplanes to dish sets, tractors to real estate. The best part is, it's free and easy to register for a bidding account. Just click here to get started.

Every auction you see on our site is contracted and managed by an independent affiliate company. These companies have chosen to utilize EasyBid as their preferred 

online auction venue. Many individuals and businesses contract with these affiliates in order to liquidate assets and manage the auctions on their behalf. <a href='#aboutUs'>Click Here</a> to learn more</p>
      </div>

      <div className='whiteCarDiv'>
        <img className='whiteCar' src={whiteCar} alt=''/>
      </div>
    </div>
  )
}

export default Header