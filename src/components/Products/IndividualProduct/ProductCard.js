import React from 'react';
import './IndividualProduct.scss';
const ProductCard = ({ images, name, image, setImageView, price }) => {
	const changeMainImageView = (img) => {
		setImageView(img);
	};

	return (
		// <div className='product-container'>
		<div className='main-img-view-images-container'>
			<img src={image} alt='AN IMAGE' className='main-img-view' />
			<div className='images-container'>
				{images &&
					images.map((image) => {
						if (image !== null) {
							return (
								<img
									src={image && image}
									alt='an Image'
									key={image}
									onClick={((e) => e.preventDefault, () => changeMainImageView(image))}
								/>
							);
						}
					})}
			</div>
			{/* </div> */}
			{/* <h3 className='product-name'>{name}</h3>
			<span className='price'>${price}</span> */}
		</div>
	);
};

export const ProductName = ({ name, price }) => {
	return (
		<div className='product-name-price-container'>
			<h3 className='product-name'>{name}</h3>
			<span className='price'>${price}</span>
		</div>
	);
};

export const ProductDescription = ({ desc }) => {
	return (
		<div className='product-desc'>
			<h3>Description</h3>
			<div>
				<p>{desc}</p>
			</div>
		</div>
	);
};

export default ProductCard;
