import React, { Component } from 'react';
import './App.css';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import CartHeader from './CartHeader';
import DropdownMenu from './Dropdown';
import Quantity from './Quantity';
import Submit from './Submit'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      ChosenItem: [],
      SelectedIds: [],
      year: "2016",
      quantity: 1,
      total: 0
    }
    this.submit = this.submit.bind(this)
  }
  const products = [
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ];



  updateQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    })
    console.log(event.target.value)
  }
  updateSelected = (e, { value }) => {
    console.log(value)
    this.setState({
      SelectedIds: value
    })
  }

  NewTotal = () => {
    let newtotal = 0
    this.state.ChosenItem.map(item => {
      newtotal += (((item.product.priceInCents) / 100) * this.state.quantity)
    })
    return newtotal
  }

  submit() {
    var newList = this.state.SelectedIds.map(id => {
      return products.filter(item => {
        return item.id === id
      })
    })
    var newItem = newList.map(item => {
      return {
        id: this.state.ChosenItem.length + 1,
        product: item[0],
        quantity: this.state.quantity
      }
    })
    this.setState({
      ChosenItem: [...this.state.ChosenItem, ...newItem],
    })
  }


  render() {
    return (
      <div className="App" >
        <CartHeader />
        <CartItems ChosenItem={this.state.ChosenItem} />
        <h3>Total: {this.NewTotal()}</h3>
        <Quantity updateQuantity={this.updateQuantity} value={this.state.quantity} />
        <DropdownMenu updateSelected={this.updateSelected} products={products} value={this.state.SelectedId} />
        <Submit submit={this.submit} />
        <CartFooter year={this.state.year} />
      </div>
    );
  }
}


export default App;
