import React from 'react';

export default class Statistics extends React.PureComponent {
    componentDidMount() {
        let {price} = this.props, x = 0;
        let number = document.querySelector('#number');
        let step = Math.round((1 / +price) * 1000);

        let countAnimating = setInterval(() => {
            number.textContent = x;
            x += 1;

            if(x > price) clearInterval(countAnimating)
        }, step);
    }

    componentDidUpdate() {
        let {price} = this.props, x = 0;
        let number = document.querySelector('#number');
        let step = Math.round((1 / +price) * 1000);

        let countAnimating = setInterval(() => {
            number.textContent = x;
            x += 1;

            if(x > price) clearInterval(countAnimating)
        }, step);
    }

    render() {
        let {cartItems} = this.props;

        return (
            <div className='Cart-statistics'>
                <p>Цены всех ваших товаров:</p>

                <ol>
                    {
                        cartItems.map((item) => {
                            return <li key={item.id}>
                                {item.title}
                                <span style={{color: '#EA4F87'}}> {item.price}</span> 
                                RU
                                </li>
                        })
                    }
                </ol>

                <hr/>

                <div>
                    <p>Итого: <span id='number' style={{color: '#48BCFD'}}></span> RU</p>
                </div>
            </div>
        );
    }
}