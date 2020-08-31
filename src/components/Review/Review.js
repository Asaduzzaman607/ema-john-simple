import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart]=useState([]);

    // order place handling

    const handlePlaceOrder =()=>{
        setCart([]);
        processOrder();
        console.log('place')

    }

    // remove item handling

    const handleRemoveItem = (productKey)=>{
        const newCart=cart.filter(pd=>pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts=productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;

        });
        setCart(cartProducts)
    },[])


    return (
        <div className='twin-container'>
            <div className='product-container'>
            { 
            cart.map(pd =><ReviewItem handleRemoveItem={handleRemoveItem} key={pd.key} product={pd}></ReviewItem>)
            }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
                </Cart>
                

            </div>
    
            
        </div>
    );
};

export default Review;