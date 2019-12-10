import React from 'react';
import CartPage from './CartPage.jsx';
import { connect } from 'react-redux';
import { deleteBookFromCart, toggleIsSaled} from '../../Redux/books-reducer.js';

class CartPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.deleteBook = this.deleteBook.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        return (this.props.cartItems.length !== 0) ? this.props.toggleIsSaled(false) : null;
    }

    deleteBook(id) {
        this.props.deleteBookFromCart(id);
    }

    render() {
        return (
            <CartPage 
                deleteBook={this.deleteBook}
                cartItems={this.props.cartItems}
                isSaled={this.props.isSaled}
                toggleIsSaled={this.props.toggleIsSaled}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cartItems: state.dataBooks.cartItems,
        isSaled: state.dataBooks.isSaled,
    }
}

export default connect(mapStateToProps, {deleteBookFromCart, toggleIsSaled})(CartPageContainer);