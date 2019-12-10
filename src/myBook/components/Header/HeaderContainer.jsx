import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header itemCounts={this.props.items}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.dataBooks.cartItems,
    }
}

export default connect(mapStateToProps)(HeaderContainer);