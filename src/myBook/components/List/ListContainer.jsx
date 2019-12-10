import React from 'react';
import List from './List.jsx';
import Loader from '../Loader/Loader.jsx';
import { connect } from 'react-redux';
import { setValue, getBooks, changePlaceholder, addBookToCart } from '../../Redux/books-reducer.js';
import { toggleFetching } from '../../Redux/loader-reducer.js';
import './List.scss';

class ListContainer extends React.Component {
    constructor(props) {
        super(props)

        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        console.log('Container is loaded')

        if(this.props.value === '') return null;
        else {
            this.props.getBooks(this.props.value);
        }
    }

    onChangeValue(ev) {
        let val = (ev.currentTarget.value).trim().toLowerCase();

        this.props.changePlaceholder(val)
    }

    onBtnAdd() {
        this.props.setValue(this.props.text);

        if(this.props.text === '') return null;
        else {
            this.props.toggleFetching(false);
            
            setTimeout(() => {
                this.props.getBooks(this.props.value);
            }, 200);
        }
    }

    addToCart(bookItem) {
        this.props.addBookToCart(bookItem);
    }

    render() {
        const {isFetching, value} = this.props;
        
        return (
            <div className='List'>
                <div className='List-form'>
                    <input type="text" placeholder={'Поиск в myBooks...'} onClick={() => this.setState({inputPlaceholder: ''})} onChange={(ev) => this.onChangeValue(ev)} />
                    
                    <button onClick={() => this.onBtnAdd()}>Поиск</button>
                </div>

            {isFetching ? 
                <List booksList={this.props.booksList} addToCart={this.addToCart} cartItems={this.props.cartItems}/> : 
                <> { value !== '' ? <Loader /> : null }</> 
            }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.dataBooks.value,
        isFetching: state.loader.isFetching,
        booksList: state.dataBooks.booksList,
        text: state.dataBooks.placeholder,
        cartItems: state.dataBooks.cartItems,
    }
}

export default connect(mapStateToProps, {setValue, changePlaceholder, toggleFetching, getBooks, addBookToCart})(ListContainer);

