import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NewArrivals.scss';
export const ArrivalProducts = ({ products }) => {
	const [ isDown, setIsDown ] = useState(false);
	const [ startX, setStartX ] = useState(0);
	const [ dragged, setDragged ] = useState(false);
	const [ scrollLeft, setScrollLeft ] = useState(null);
	const myRef = useRef();
	const clickRef = useRef('');

	const preventClick = (e) => {
		e.preventDefault();
		console.log('hey');
		console.log(dragged);
	};

	const mouseDown = (e) => {
		e.persist();
		setIsDown(true);
		setStartX((prevState) => e.pageX - myRef.current.offsetLeft);
		setScrollLeft((prevState) => myRef.current.scrollLeft);
	};

	const mouseLeave = (e) => {
		setIsDown(false);
	};

	const mouseUp = (e) => {
		setDragged(false);
		setIsDown(false);
	};

	const mouseMove = (e) => {
		if (!isDown) return;
		e.preventDefault();
		setDragged(true);
		const x = e.pageX - myRef.current.offsetLeft;
		const walk = x - startX;
		myRef.current.scrollLeft = scrollLeft - walk;
	};
	console.log({ dragged, prevState: clickRef.current });
	useEffect(
		() => {
			clickRef.current = dragged;
		},
		[ dragged ]
	);

	return (
		<div
			className='product-arrival-section'
			onMouseDown={mouseDown}
			onMouseLeave={mouseLeave}
			onMouseMove={mouseMove}
			onMouseUp={mouseUp}
			style={{ cursor: isDown ? 'grabbing' : null }}
			ref={myRef}
		>
			<div className='arrival-product-container'>
				{products.map((item, i) => (
					<div className='arrival-product' key={i}>
						<NavLink
							to={`/products/product/${item.product_id}`}
							draggable='false'
							onClick={clickRef.current ? preventClick : null}
						>
							<img
								className='product-image'
								src={item.image}
								draggable='false'
								onMouseDown={(e) => e.preventDefault()}
							/>
							<h3>{item.name}</h3>
						</NavLink>
						<span className='product-price'>${item.price}</span>
					</div>
				))}
			</div>
		</div>
	);
};
