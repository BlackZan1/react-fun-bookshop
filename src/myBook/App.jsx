import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CartPageContainer from './components/CartPage/CartPageContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import ListContainer from './components/List/ListContainer.jsx';
import IntroContainer from './components/Intro/IntroContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <HeaderContainer />

                    <Route path='/cart' render={() => ( <CartPageContainer /> )}/>

                    <Route path='/funBookShop' render={() => (
                        <>
                            <IntroContainer />
                            <ListContainer />
                        </>
                    )}/>
                    
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
