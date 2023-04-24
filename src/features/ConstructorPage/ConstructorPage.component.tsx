import './ConstructorPage.styles.scss';

import React, { useState } from 'react';
import Pizza from './Pizza/Pizza.component';

import PizzaProps from '../../interfaces/PizzaProps.interface';
import PizzaForm from './PizzaForm/PizzaForm.component';

const ConstructorPage = () => {
    const [pizzaState, setPizzaState] = useState<Partial<PizzaProps>>();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleSubmit = () => {

    };

    return (
        <div>
            <div className='mainBanner'>
                <p> This is constructor page! </p>
            </div>
            <div className='constructorBodyContainer'>
                <Pizza state={pizzaState} setState={setPizzaState}/>
                <div className='constuctionFormContainer'>
                    <PizzaForm setState={setPizzaState}/>
                </div>
            </div>
        </div>
    );
};

export default ConstructorPage;