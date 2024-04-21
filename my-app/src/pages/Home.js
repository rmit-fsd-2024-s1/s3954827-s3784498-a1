// Home.js
import React from 'react';
import './Home.css'; // Import the CSS file
import avo from '../components/images/avo.jpg'
import cucumbers from '../components/images/cucumbers.jpg'
import fruit from '../components/images/fruit.jpg'
import lettuce from '../components/images/lettuce.jpg'

function Home() {
  return (
    <div className="home-container">
      <h1 className='slogan'>Explore our range of organic treasures, meticulously crafted to nourish both body and soul.</h1>
      <div className="image-container">
        <img src={avo} alt="Image 1" className="home-image" />
        <img src={cucumbers} alt="Image 2" className="home-image" />
        <img src={fruit} alt="Image 3" className="home-image" />
        <img src={lettuce} alt="Image 4" className="home-image" />
      </div>
      <div className="text-container">
        <p>This is the first paragraph of text.</p>
        <p>This is the second paragraph of text.</p>
      </div>
    </div>
  );
}

export default Home;