import React from 'react';
import loader from '../../img/loader.gif';
import './Loader.css';

const Loader = () => {
    return (
        <img src={loader} alt="Loading..." className='Loader'/>
    )
}

export default Loader;