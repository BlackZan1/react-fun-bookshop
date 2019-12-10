import React from 'react';
import Block from '../Block/Block.jsx';
import './Footer.scss';

export default (props) => {
    let buttons = [
        {class: 'fab fa-apple', src: 'https://www.apple.com/ru/ios/app-store/'},
        {class: 'fab fa-android', src: 'https://play.google.com/store?hl=ru'},
        {class: 'fab fa-facebook-square', src: 'https://www.facebook.com/kenshin.nakamura.77'},
    ];

    return (
        <div className='Footer'>
            <div className='Footer-info'>
                <h2>myBooks</h2>
                <p>Copyright © 2045. All rights reserved</p>
            </div>

            <div className='Footer-list'>
                {buttons.map(btn => (
                    <Block className={'Button-item'} key={btn.class.length}>
                        <a target='_blank' rel='noopener noreferrer' href={btn.src}><i className={btn.class}></i></a>
                    </Block>
                ))}
            </div>
        </div>
    )
};
