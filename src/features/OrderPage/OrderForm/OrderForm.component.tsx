import React from 'react';

interface Props {
    handleSubmit: () => void,
    handleChange: () => void,
}

const OrderForm = ({handleChange, handleSubmit} : Props) => {
    return(
        <form onSubmit={ handleSubmit } onChange={handleChange}>
        <label>
            Ім&apos;я:
            <input type="text" name="name" />
        </label>
        <label>
            Прізвище:
            <input type="text" name="name" />
        </label>
        <label>
            Коментар до замовлення:
            <textarea>
                Добав коментар до свого замолення...
            </textarea>
        </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default OrderForm;