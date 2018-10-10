import React, { Component } from 'react';
import './App.css';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import CartHeader from './CartHeader';
import DropdownMenu from './Dropdown';
import Quantity from './Quantity';
import Total from './Total'
import Submit from './Submit'



class App extends Component {
  state = {
    ChosenItem: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    year: "2016",
  }
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems ChosenItem={this.state.ChosenItem} />
        {/* <Total /> */}
        <Quantity />
        <DropdownMenu products={this.state.products} />
        <Submit />
        <CartFooter year={this.state.year} />

      </div>
    );
  }
}

export default App;
