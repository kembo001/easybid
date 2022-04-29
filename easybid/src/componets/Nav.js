import React from 'react'
import './Nav.css'

function Header() {
  return (
    <div className='nav'>
        <div className='headerNav'>
          <nav>
          <label className='logo'>EasyBid</label>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#auctions'>Sign In</a></li>
              <li><a href='#account'>Auctions</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><a href='#aboutUs'>About Us</a></li>
              <li> <div className='header_search'>
                <form>
                <input className='header_searchInput' type= 'text' />
                <button type='submit' className='btn btn-primary'>Search</button>
                </form>
            </div></li>
            </ul>
          </nav>
        </div>
    
    </div>
  )
}

export default Header