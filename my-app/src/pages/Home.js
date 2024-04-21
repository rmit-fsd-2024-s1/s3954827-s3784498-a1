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
        <p>Welcome to our organic paradise, where every product is a labor of love. From farm to table, we are committed to delivering the freshest, most flavorful produce straight to your door. Dive into a world of vibrant colors, tantalizing aromas, and unbeatable nutrition, and join us on a journey to better health and well-being.</p>
        <p>At our farm, sustainability isn't just a buzzword—it's a way of life. We prioritize eco-friendly farming practices, minimize waste, and prioritize biodiversity to ensure a healthier planet for generations to come. With every purchase, you're not just supporting local agriculture, but also contributing to a greener, more sustainable future for all.</p>
      </div>
    </div>
  );
}

export default Home;