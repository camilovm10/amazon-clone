import React from 'react';
import { useStateValue } from '../context/StateProvider';
import '../product.css';

const Product = ({ title, image, price, rating, id }) => {

    const [{ basket }, dispatch ] = useStateValue();

    console.log(`the basket is: ${basket}`)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id,
                title, 
                image, 
                price,
                rating
            }
        })
    }   


    return (
        <div className="product">
            <div className="product__info">
                <p className="title__product">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price} </strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(rate => <p>⭐</p> )}
                    
                </div>
            </div>

            <img
                src={image}
                alt={`product-${id}`}
            />

            <button
                onClick={addToBasket}
            >
                Add to Basket
            </button>
            
        </div>
    )
}

export default Product
