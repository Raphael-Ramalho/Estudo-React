import React from 'react';
import './Checkout.css'

function Checkout(){
    return <div className='checkout'>
        <div>
            <h2 className='checkout__title'>
                Your shopping Basket
            </h2>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
}

export default Checkout