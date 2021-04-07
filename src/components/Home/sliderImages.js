import slideOne from '../images/homapge1.jpg';
import slideTwo from '../images/homepage2.jpg';
import slideFour from '../images/homepage4.jpg';
import slideFive from '../images/hompage5.jpg';
export const slides = [
	{
		route: 'products?product_for=men&type=gi',
		image: slideOne,
		name: "Shop Men's Gi"
	},
	{
		route: 'products?product_for=unisex&type=gloves',
		image: slideTwo,
		name: 'Shop Gloves'
	},
	{
		route: 'products?product_for=women&type=gi',
		image: slideFour,
		name: "Shop Women's Gi"
	},
	{
		route: 'products?product_for=kid&type=gi',
		image: slideFive,
		name: "Shop Kid's Gi"
	}
];
