import React from 'react';
import Block from '../../../Block/Block.jsx';
import './Modal.scss';

export default ({toggleIsOpen, deleteAllBooks}) => {
    const closeModal = () => {  
        toggleIsOpen(false);
        deleteAllBooks();
    }

    return (
        <Block className={'Cart-modal'}>
            <div className='Modal-item'>
                <div className='Modal-body'>
                    <p>Чек отправлен на вашу почту</p>
                    <p>Обещаем доставить как можно быстрее :)</p>

                    <div>
                        <span style={{color: '#EA4F87'}}>Спасибо</span> за <span style={{color: '#48BCFD'}}>покупку</span>
                    </div>
                </div>

                <div className='Modal-btn'>
                    <button onClick={() => closeModal()}>Закрыть</button>
                </div>
            </div>
        </Block>
    )
}