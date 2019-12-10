import React from 'react';
import Item from './Item/Item.jsx';
import noCoverBook from '../../img/noCoverBook.png';

const List = (props) => {
    const showBooksItems = props.booksList.map(book => {
        const dataDes = book.volumeInfo, dataSale = book.saleInfo;
        const id = book.id

        return <Item title={dataDes.title}
                     id={id} 
                     image={dataDes.imageLinks ? dataDes.imageLinks.thumbnail : noCoverBook} 
                     authors={dataDes.authors ? dataDes.authors : ['Неизвестный автор']}
                     key={id}
                     addToCart={props.addToCart}
                     price={dataSale.retailPrice ? dataSale.retailPrice.amount : 'Нет в наличии'}
                     des={dataDes.description}
                     cartItems={props.cartItems}
        />
    })

    return (
        <div className='List-items'>
            {props.booksList.length > 1 ? showBooksItems : <h2>У нас нет такой книги (｡T ω T｡)</h2>}
        </div>
    )
}

export default List;