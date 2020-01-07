import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({price, cartItems, toggleIsOpen}) => {
    const showModal = () => {
        toggleIsOpen(true);
    }

    return (
        <>
        <div className='Cart-price-count'>
            Всего {price} рублей

            <button className='Cart-pay-btn' onClick={() => cartItems.length >= 1 ? showModal() : null}>
                {cartItems.length >= 1 ?
                    'Оплатить'
                    :
                    <NavLink to='/funBookShop'>
                        Пора прикупить книги
                    </NavLink>
                }
            </button>
        </div>
        </>
    )
}