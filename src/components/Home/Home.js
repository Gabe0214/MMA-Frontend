import React from 'react'
import { items } from '../ShoppingCartPage/ShoppingCartDummyData'
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

const addItem = () => {
    setCart([...cart, 1])
    console.log('hello')
}

    return (
      <>
        <div>
        <Slider {...settings} arrows={false} dotsClass="slick-dots dotsa">
          <div className="item-one">
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        
        </div>
        <div><h4>Hello</h4></div>
      </>
    )
}

export default HomePage