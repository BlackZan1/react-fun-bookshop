import React from 'react';

export default ({cartItems, showCartItems, isSaled}) => {
    return (
        <div className='Cart-list'>
            {cartItems.length >= 1 ? showCartItems : 
                <div className='Cart-list-empty'>
                    { isSaled ? <>Идет доставка ... <i className="fas fa-plane-departure"></i> </> : 'Корзина пуста (；￣Д￣)'}
                </div>
            }
        </div>
    );
}