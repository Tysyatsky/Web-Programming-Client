import './Pizza.styles.scss';
import React from 'react';

import { ReactComponent as Souse } from '../../../assets/Souse.svg';
import { ReactComponent as Cheese } from '../../../assets/Cheeese.svg';
import { ReactComponent as Ogurek } from '../../../assets/Ogurek.svg';
import { ReactComponent as PizzaBody } from '../../../assets/PizzaBody.svg';
import { ReactComponent as Salamy } from '../../../assets/Salamy.svg';

import PizzaProps from '../../../interfaces/PizzaProps.interface';

interface Props {
    setState: React.Dispatch<React.SetStateAction<Partial<PizzaProps> | undefined>>,
    state: Partial<PizzaProps> | undefined,
}

const Pizza = ({setState, state} : Props) => {
    return (
        <div className='pizzaContainer'>
            <PizzaBody className='pizzaItem'/>
            {state?.souse && <Souse className='pizzaItem'/>}
            {state?.cheese && <Cheese className='pizzaItem'/>}
            {state?.salamy && <Salamy className='pizzaItem'/>}
            {state?.cucumber && <Ogurek className='pizzaItem'/>}
        </div>
    );
};

export default Pizza;