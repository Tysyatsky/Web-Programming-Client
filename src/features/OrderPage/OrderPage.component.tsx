import OrderForm from './OrderForm/OrderForm.component';
import './OrderPage.styles.scss';

import React from 'react';

const OrderPage = () => {
    
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleSubmit = () => {

    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleChange = () => {

    };

    return(
        <div>
            <p className='mainBanner'> This is ordering page! </p>
            <OrderForm handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default OrderPage;