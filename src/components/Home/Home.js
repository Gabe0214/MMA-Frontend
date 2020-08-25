import React from 'react'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import './Home.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = ({cart, setCart}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    }

const addItem = (e) => {
   
    setCart([...cart, 1])
    e.preventDefault();
   
}

    return (
      <>
        <div>
        <Slider {...settings} arrows={false} focusOnSelect={true} dotsClass="slick-dots dotsa" className='slider-item-container'>
          <div className="item-one">
            <div className="over-lay">
               <h3 className="home-page-title">Shop Men's Gi</h3>
               <NavLink to='/men-Gi'>Shop</NavLink>
            </div>
          </div>
          <div className="item-two">
            <div className="over-lay">
              <h3 className="home-page-title">Shop Boxing & MMA Gear</h3>
              <NavLink to="/mma-boxing-all">Shop</NavLink>
            </div>
          </div>
          <div className="item-three">
            <div className="over-lay">
              <h3 className="home-page-title">Shop Muay Thai</h3>
              <NavLink to ='/muay-thai'>Shop</NavLink>
            </div>
          </div>
        </Slider>
        
        </div>
        <div><button onClick={addItem}>hello</button></div>
      </>
    )
}

export default HomePage