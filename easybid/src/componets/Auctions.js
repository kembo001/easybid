import React from 'react'
import './Auctions.css'
import image1 from '../images/2008 elantra.jpeg'
import image2 from '../images/2012 camry.jpg'
import image3 from '../images/2015honda.jpg'
import image4 from '../images/ChevyCruze.jpg'
import image5 from '../images/crv2006.jpg'

const data = [
    {
        id: 1, 
        title: 'Hyndai',
        Model: 'Elantra',
        Year: 2008,
        image: image1,
        timer: '3 days',
        price: '$2050'
    },
    {
        id: 1, 
        title: 'Toyota',
        Model: 'Camry',
        Year: 2012,
        image: image2,
        timer: 100,
        price: '$2050'
    },
    {
        id: 1, 
        title: 'Honda',
        Model: 'Civic',
        Year: 2008,
        image: image3,
        timer: 100,
        price: '$2050'
    },
    {
        id: 1, 
        title: 'Chevy',
        Model: 'Cruz',
        Year: 2012,
        image: image4,
        timer: 100,
        price: '$2050'
    },
    {
        id: 1, 
        title: 'Honda',
        Model: 'Cr-v',
        Year: 2006,
        image: image5,
        timer: 100,
        price: '$2050'
    }
]

function Auctions() {
  return (
    <div className='auctions'>
        <div className='auctionsTitle'>
            <h2> Car Auctions</h2>
        </div>
        <div className='carContainer'>
            {
                data.map(({id, title, Model, Year, image, price, timer}) => {
                    return(
                    <article key={id} className='carItem'>
                        <div className='carDescription'>
                            <h3>Make: {title}</h3>
                            <h3>Model: {Model}</h3>
                            <h3>Year: {Year}</h3>
                            <a href='#AuctionFull'>See all</a>
                        </div>
                        <div className='carImage'>
                            <img src={image} alt='' />
                        </div>
                        <h4>{timer} left</h4>
                        <h2>{price}</h2>
                        <button>Bid</button>
                    </article>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Auctions