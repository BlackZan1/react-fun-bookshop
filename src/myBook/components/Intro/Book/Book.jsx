import React from 'react';

export default (props) => {
    debugger;
    return (
        <div className={`Book-item`} key={props.index}>
            <div className='Book-scene'>
                <div className='Book-poster'>
                    <div className='Book-image'>
                        <img src={props.info.imageLinks.smallThumbnail} alt="Loading..." />
                    </div>

                    <div className='Book-title'>{props.info.title}</div>
                </div>

                <div className='Book-info'>
                    <div className='Book-info-inner'>
                        <h2>{props.info.title}</h2>
                        <div className='Book-author'>{props.info.authors[0]}</div>

                        <p>{props.info.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};