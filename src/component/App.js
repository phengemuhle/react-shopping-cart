import React, { Component } from 'react';
import './App.css';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import CartHeader from './CartHeader';
import DropdownMenu from './Dropdown';
import Quantity from './Quantity';
import Total from './Total'
import Submit from './Submit'


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





class App extends Component {
  state = {
    ChosenItem: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    SelectedIds: [],
    year: "2016",
    quantity: 1,
  }

  //   arr.map(item => {
  //     if(item === product.map(i => {
  //       return products

  //     }))
  // })

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

  // addItemToCart = (product) => {
  //   var newItem = {
  //     id: this.state.cartItems.length + 1,
  //     product: product,
  //     quantity: 32
  //   }
  //   this.setState({
  //     cartItems: [...this.state.cartItems, newItem]
  //   })
  //   // this.setState(function (prevState) {
  //   //   prevState.cartItems.push(newItem)
  //   //   return prevState
  //   // })
  // }

  // removeItemFromCart = (id) => {
  //   var newCart = this.state.cartItems.filter(item => {
  //     return item.id !== id
  //   })
  //   this.setState({
  //     cartItems: newCart
  //   })
  // }
  submit = () => {
    var newList = this.state.SelectedIds.filter(id => {
      // use the warmup function to find the product that matches the id
      // create a new cart item with the product that you found
      // return that new cart item
    })
    // update the cart item state with the new list
  }

  render() {
    return (
      <div className="App" >
        <CartHeader />
        <CartItems ChosenItem={this.state.ChosenItem} />
        {/* <Total /> */}
        <Quantity updateQuantity={this.updateQuantity} value={this.state.quantity} />
        <DropdownMenu updateSelected={this.updateSelected} products={products} value={this.state.SelectedId} />
        <Submit submit={this.submit} />
        <CartFooter year={this.state.year} />

      </div>
    );
  }
}

export default App;


  //   removeItemFromCart = (id) => {
  //       var newCart = this.state.cartItems.filter(item => {
  //         return item.id !== id
  //       })
  //       this.setState({
  //         cartItems: newCart
  //       })
  //     }




  // quant = (e) => {
  //       e.preventDefault()
  //       console.log(e.target.value)
  //     }


// makeBigger = () => {
//   const newSize = this.state.size + 10
//   this.setState({
//     size: newSize
//   })
// }