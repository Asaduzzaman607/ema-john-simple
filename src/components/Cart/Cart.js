import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd)=> total + prd.price, 0);
    // let total = 0;
    // for (let i =0, i< cart.length; i++){
    //     const product = cart[i];
    //     total= total+ product.price;
    // }

    // Shipping cost
    let shipping = 0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
            shipping=12.99
    }

    // Tax

    const tax = Math.round(total/10);

    // Grand total cost

    const grandTotal =(total + shipping);

    // format number

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return  Number(precision);
    }

    // return html


    return (
        <div>
            <h4>Order Summary</h4>
    <p>Items Ordered: {cart.length}</p>
    <p>Product Price: { formatNumber(total) }</p>
    <p> <small>Shipping Cost:{shipping}</small> </p>
    <p><small>Tax+ VAT : {formatNumber(tax)}</small></p>
    <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;