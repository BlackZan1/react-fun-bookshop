import React from 'react';
import { connect } from 'react-redux';
import { getFavBooks } from '../../Redux/intro-reducer.js';
import Intro from './Intro.jsx';

class IntroContainer extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);

        let { favBooks, items, getFavBooks } = this.props;

        if(favBooks.length >= 3) {
            console.log('Ok')
            return null;
        } else {
            items.map(item => {
                return (
                    getFavBooks(item)
                );
            });
        }  
    }

    render() {
        return <Intro favBooks={this.props.favBooks}/>
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.dataIntro.items,
        favBooks: state.dataIntro.favBooks,
    }
} 

export default connect(mapStateToProps, { getFavBooks })(IntroContainer);