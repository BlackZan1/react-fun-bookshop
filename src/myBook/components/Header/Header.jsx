import React from 'react';
import cart from '../../img/shopcart.png';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handlerScroll = this.handlerScroll.bind(this);
    }

    state = {
        isAlpha: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handlerScroll);
    }

    handlerScroll() {
        if(window.pageYOffset > 70) this.setState({isAlpha: false});
        else this.setState({isAlpha: true})
    } 

    render() {
        let {isAlpha} = this.state; 

        return (
            <div className='Header' style={isAlpha ? {background: 'rgba(50, 50, 50, 1)'} : {background: 'rgba(50, 50, 50, 0.9)'}}>
                <NavLink to='/funBookShop'>
                    <h1 className='Header-logo'>
                        <span style={{color: '#ED539D'}}>my</span>
                        <span style={{color: '#48BCFD'}}>B</span>
                        ooks
                    </h1>
                </NavLink>

                <div className='Header-container'>
                    <NavLink to='/cart'>
                        <div className='Header-cart'>
                            <img src={cart} alt="Loading..." style={{width: '25px'}}/>
                        </div>

                        {this.props.itemCounts.length !== 0 ?
                            <div className='items-count'>{this.props.itemCounts.length}</div>
                            :
                            null
                        }
                    </NavLink>
                </div>
            </div>
        )    
    }
}

export default Header;