import React from 'react'

function Header() {
  return (
    <div className='header'>
        <h1 className='headerLogo'>Easy Bid</h1>
        <div className='header_search'>
          <input className='header_searchInput' type= 'text' />
      </div>
    
    <div className='headerNav'>
        <div className='headerOption'>
            <span className='headerOptionLineOne'>Hello Guest</span>
            <span className='headerOptionLineOne'>Sign In</span>
        </div>
    </div>
    
    </div>
  )
}

export default Header