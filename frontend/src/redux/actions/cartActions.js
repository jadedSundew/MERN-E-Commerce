import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
	try {
		const { data } = await axios.get(`/api/products/${productId}`);
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
				product: data._id,
				qty
			}
		});
	} catch (error) {
		console.log('cartActions: addToCart', error);
	}
	console.log('getState: addToCart', getState());
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

/****************************************************************************************************************************************************************/

export const removeFromCart = (productId) => async (dispatch, getState) => {
	try {
		dispatch({
			type: CART_REMOVE_ITEM,
			payload: productId
		});
	} catch (error) {
		console.log('cardActions: removeFromCart', error);
	}

	console.log('getState: removeFromCart', getState());
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
