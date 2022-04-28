import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headerNav'>
          <nav>
          <label className='logo'>Easy Bid</label>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#auctions'>Auctions</a></li>
              <li><a href='#account'>Account</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><a href='#aboutUs'>About Us</a></li>
              <li> <div className='header_search'>
              <input className='header_searchInput' type= 'text' />
            </div></li>
            </ul>
          </nav>
        </div>
    
    </div>
  )
}

export default Header