import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <article>
            <p className='footerTitle'>Get to Know Us</p>
                <ul>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About EasyBid</li>
                    <li>Sustainability</li>
                    <li>Press Center</li>
                    <li>Investor Relations</li>
                </ul>
        </article>

        <article>
            <p className='footerTitle'>Make Money with Us</p>
                <ul>
                    <li>Sell Products on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Start a buisness under EasyBid</li>
                    <li>Advertise Your Products</li>
                </ul>
        </article>

        <article>
            <p className='footerTitle'>Tools & apps</p>
                <ul>
                    <li>Developers</li>
                    <li>Security center</li>
                    <li>Site map</li>
                    <li>Sustainability</li>
                </ul>
        </article>

        <article>
            <p className='footerTitle'>Help & Contact</p>
                <ul>
                    <li>Seller Center</li>
                    <li>Contact us</li>
                    <li>EasyBid Returns</li>
                </ul>
        </article>
    </div>
  )
}

export default Footer