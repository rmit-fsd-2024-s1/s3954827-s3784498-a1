// Contact.js
import React from 'react';
import placeholderImage from '../components/images/placeholder.png';
import Carousel from '../components/carousel/carousel.js'
import './SpecialDeals.css'

const SpecialDeals = () => {
    return (
        <div className="container">
            <h1 className='heading-1'> Special Deals! </h1>
            <div className='carousel-center'><Carousel/></div>
            <div className='deal-info'>
            <h2 className='heading-two'> Our specials for this week:</h2>
            {/* NOTE: The below list / specials will need to be updated from LocalStorage */}
            <ul className='list-1'>
                <li>
                    Potatoes
                </li>
                <li>
                    Carrots
                </li>
                <li>
                    Tunips
                </li>
            </ul>
            </div>
        </div>
    );
}

export default SpecialDeals;

