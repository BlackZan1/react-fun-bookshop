import React from 'react';
import CartItem from './CartItem/CartItem.jsx';
import CartList from './CartList/CartList.jsx';
import Block from '../Block/Block.jsx';
import CartCount from './CartCount/CartCount.jsx';
import Statistics from './Statistics/Statistics.jsx';
import './CartPage.scss';
import Modal from './CartCount/Modal/Modal.jsx';

const CartPage = ({deleteBook, cartItems, isSaled, toggleIsSaled}) => {
    let price = 0;
    let [isOpen, setIsOpen] = React.useState(false);

    const showCartItems = cartItems.map(item => {
        price += item.price;

        return <CartItem item={item} key={item.id} deleteBook={deleteBook}/>
    })

    const toggleIsOpen = (isOpen) => {
        setIsOpen(isOpen);
    }

    const deleteAllBooks = () => {
        toggleIsSaled(true);

        return cartItems.map(item => {
            deleteBook(item.id);
        })
    }

    return (
        <>
            <div className='Cart'>
                <div className='Cart-count'>
                    У Вас всего товаров в корзине 
                    <span style={{color: '#ED539D', margin: '0px 0px 0px 10px'}}>
                        {cartItems.length}
                    </span>
                </div>

                <CartList showCartItems={showCartItems} cartItems={cartItems} isSaled={isSaled}/>

                <CartCount price={price} cartItems={cartItems} toggleIsOpen={toggleIsOpen}/>

                <Block className='Cart-bottom'>
                    <Block className='Cart-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1461.8995838120209!2d74.59602623818087!3d42.87708290356818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1574583437686!5m2!1sru!2skg" 
                        width="600" 
                        height="450" 
                        frameBorder="0" 
                        style={{border: "0"}} 
                        allowFullScreen=""
                        title='PositionMap'>
                        </iframe>
                        <p>Мы находимся здесь - ул. Тоголок Молдо, Бишкек</p>
                    </Block>

                    {
                        cartItems.length !== 0 && (
                            <Statistics cartItems={cartItems} price={price}/>
                        )
                    }
                </Block>
            </div>

            {
                isOpen && (
                    <Modal toggleIsOpen={toggleIsOpen} deleteAllBooks={deleteAllBooks}/>
                )
            }
        </>
    )
}

export default CartPage;