import { FETCH_PRODUCTS } from './types';
import { getProducts } from '../../data';

export const fetchProducts = () => dispatch => {
    const repairs = getProducts();
     dispatch({
        type: FETCH_PRODUCTS,
        payload: repairs
    })
}