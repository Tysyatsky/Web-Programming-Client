import PizzaProps from '../../../interfaces/PizzaProps.interface';
import './PizzaForm.styles.scss';

import React from 'react';

interface Props {
    setState: React.Dispatch<React.SetStateAction<Partial<PizzaProps> | undefined>>,
}

const PizzaForm = ({setState} : Props) => {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleChange = () => {

    };

    const handleToggle = ({ target }) =>
    setState(s => ({ ...s, [target.name]: !s[target.name] }));

    return (
        <form>
            <input
                type="checkbox"
                onChange={handleToggle}
                key={key}
                name={key}
                checked={state[key]}
            />
        </form>
    );
};

export default PizzaForm;