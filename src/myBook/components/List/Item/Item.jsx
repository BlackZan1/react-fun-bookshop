import React from 'react';
import { NavLink } from 'react-router-dom';
import './Item.scss';

class Item extends React.PureComponent {
    constructor(props) {
        super(props);

        this.bookPriceInRU = Math.floor(this.props.price * 64);
        this.OnBtnClick = this.OnBtnClick.bind(this);
    }
    
    state = {
        isInCart: false,
    }

    componentDidMount() {
        debugger;
        if(this.props.cartItems.some(a => a.id === this.props.id)) {
            debugger;
            this.setState({
                isInCart: true,
            });
        } else {
            this.setState({
                isInCart: false,
            })
        }
    }

    OnBtnClick() {
        let {title, image, authors, id, addToCart, des} = this.props;

        let bookItem = {
            id,
            price: this.bookPriceInRU,
            title,
            image,
            authors,
            des,
        }

        addToCart(bookItem);
        this.setState({
            isInCart: true
        })
    }

    render() {
        let {title, image, authors, id, price} = this.props;

        return (
            <div className='List-item' key={id}>
                <div className='List-cover'>
                    <img src={image} alt="Loading..."/>
                </div>

                <div className='List-info'>
                    <h2>{title}</h2>
                    <div className='List-authors'>
                        {authors.map(author => {
                        return <p key={id + Math.random()}>{author}</p>
                        })}
                    </div>
                </div>

                <div>
                    {price === 'Нет в наличии' ? 
                        <div className='List-empty'>
                            <p>{price}</p>
                        </div>
                            :
                        <div className='List-order'>
                            <div className='List-price'>{this.bookPriceInRU} рублей</div>
                            <button onClick={this.state.isInCart ? null : this.OnBtnClick} className={this.state.isInCart ? 'List-order-btn-go' : 'List-order-btn' } >
                                {this.state.isInCart ? <NavLink to='/cart'>Перейти в корзину</NavLink> : 'Добавить в покупки'}
                            </button>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Item;