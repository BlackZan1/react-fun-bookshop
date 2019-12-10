import React from 'react';
import './CartItem.scss';

export default (props) => {
    let [isOpen, useIsOpen] = React.useState(false);
    let [isDeleted, useIsDeleted] = React.useState(false);

    const OnBtnClick = () => {
        useIsDeleted(true);
        setTimeout(() => {
            props.deleteBook(props.item.id);
        }, 1000);
    }

    return (
        <div className='CartItem' style={isDeleted ? {animation: 'bounceOutRight 1s ease'} : {animation: 'bounceInLeft 1s ease'}}>
            <div className='CartItem-body'>
                <div className='CartItem-image'>
                    <img src={props.item.image} alt='Loading...' />
                </div>

                <div className='CartItem-info'>
                    <div className='CartItem-title'>
                        {props.item.title}
                    </div>
                    
                    <div className='CartItem-author'>
                        {props.item.authors}
                    </div>

                    {!isOpen && <button className='CartItem-show-btn' onClick={() => useIsOpen(true)}>Подробнее</button>}
                </div>

                <div className='CartItem-order'>
                    <h2>{props.item.price} рублей</h2>
                </div>

                <button className='CartItem-delete-btn' onClick={() => OnBtnClick()}>
                    &times;
                </button>
            </div>

            {isOpen && (
                <div className='CartItem-des'>
                    <p>{props.item.des}</p>

                    <button className='CartItem-show-btn' onClick={() => useIsOpen(false)}>Скрыть</button>
                </div>
            )}
        </div>
    )
}