import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { slides } from './sliderImages';
import './Home.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewArrivals from './NewArrivals/NewArrivals';
import { GallerySection } from './GallerySection/Gallery';
// import { DeliverySection } from './DeliverySection/DeliverySection';
const HomePage = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	};

	return (
		<React.Fragment>
			<div>
				<Slider
					{...settings}
					arrows={false}
					focusOnSelect={true}
					dotsClass='slick-dots dotsa'
					className='slider-item-container'
				>
					{slides.map((slide) => {
						return (
							<div>
								<div className='item' style={{ background: `url(${slide.image}) no-repeat center center/cover` }}>
									<div className='over-lay'>
										<h3 className='home-page-title'>{slide.name}</h3>
										<NavLink to={slide.route}>Shop</NavLink>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
				<NewArrivals />
				<GallerySection />
			</div>
		</React.Fragment>
	);
};

export default HomePage;
