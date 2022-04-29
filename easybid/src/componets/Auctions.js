import React from 'react'
import './Auctions.css'
import image1 from '../images/Cars.jpeg'

const data = [
    {
        id: 1, 
        title: 'Toyota Camry 2012',
        image: image1,
        timer: 100,
        price: '$2050'
    },
    {
        id: 2, 
        title: 'Toyota Camry 2012',
        image: image1,
        timer: 100,
        price: '$2050'
    },
    {
        id: 3, 
        title: 'Toyota Camry 2012',
        image: image1,
        timer: 100,
        price: '$2050'
    },
    {
        id: 4, 
        title: 'Toyota Camry 2012',
        image: image1,
        timer: 100,
        price: '$2050'
    },
    {
        id: 5, 
        title: 'Toyota Camry 2012',
        image: image1,
        timer: 100,
        price: '$2050'
    }
]

function Auctions() {
  return (
    <div className='auctions'>
        <div className='auctionsTitle'>
            <h2> Car Auctions</h2> <a href='#fullAuction'>See all</a>
        </div>
        <div className='carContainer'>
            {
                data.map(({id, title, image, price, timer}) => {
                    return(
                    <article key={id} className='carItem'>
                        <h3>{title}</h3>
                        <div className='carImage'>
                            <img src={image} alt='' />
                        </div>
                        <h4>{timer}</h4>
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