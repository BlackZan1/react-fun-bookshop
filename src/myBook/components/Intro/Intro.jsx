import React from 'react';
import Book from './Book/Book.jsx';
import './Intro.scss';

const Intro = (props) => {
    const showBooks = props.favBooks.map((book, index) => {
        debugger;
        return <Book info={book} index={index} key={index}/>
    })

    return (
        <div className='Intro'>
            <div className='Intro-top'>
                <p>Здесь вы можете найти книги и изменить свою жизнь</p>
            </div>

            <div className='Intro-fav'>
                <div className='Intro-trio'>
                    {showBooks}
                </div>
            </div>

            <div className='Intro-text'>
                <div className='Intro-des'>Книги изменившие мир</div>
                <p>Поищите книги которые изменят именно Вас</p>
            </div>
        </div>
    )
}

export default Intro;
