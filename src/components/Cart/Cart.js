import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd)=> total + prd.price, 0);
    let total = 0;
    for (let i =0; i< cart.length; i++){
        const product = cart[i];
        total= total+ product.price * product.quantity;
       
    }

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

    // format number
    const formatNumber = num => parseFloat(num.toFixed(2));

    // Tax

    const tax =formatNumber(total/10);

    // Grand total cost

    const grandTotal =  formatNumber(total + tax + shipping);

    

    // const formatNumber = num =>{
    //     const precision = num.toFixed(2);
    //     return  Number(precision);
    // }

    // return html
    let totalQuantity=0;
    for(let i=0; i< cart.length; i++){
        totalQuantity=totalQuantity+ cart[i].quantity;
    }


    return (
        <div>
           <h3>Order Summery</h3>
            <h5>Items ordered : {props.cart.length}</h5>
            <h5>Total Quantity: {totalQuantity}</h5>
            <h5>Total Price : ${total.toFixed(2)}</h5>
            <h6>Shipping Cost : ${shipping}</h6>
            <h6>Estimated Tax: ${tax}</h6>
            <h5>Total Price :${grandTotal} </h5>
            { 
            props.children
            }  
            
        </div>
    );
};

export default Cart;