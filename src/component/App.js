import React, { Component } from "react";
import "./App.css";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import DropdownMenu from "./Dropdown";
import Quantity from "./Quantity";
import Submit from "./Submit";
// import products from './products.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChosenItem: [],
      SelectedIds: [],
      year: "2016",
      quantity: 1,
      total: 0,
      products: []
    };
    this.submit = this.submit.bind(this);
  }

  async componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}`, {})
      .then(result => result.json())
      .then(response =>
        this.setState({
          products: response
        })
      );
  }

  updateQuantity = event => {
    this.setState({
      quantity: event.target.value
    });
    console.log(event.target.value);
  };

  updateSelected = (e, { value }) => {
    console.log(value);
    this.setState({
      SelectedIds: value
    });
  };

  NewTotal = () => {
    let newtotal = 0;
    this.state.ChosenItem.map(item => {
      newtotal += (item.product.priceInCents / 100) * this.state.quantity;
    });
    return newtotal.toFixed(2);
  };

  submit() {
    var newList = this.state.SelectedIds.map(id => {
      return this.state.products.filter(item => {
        return item.id === id;
      });
    });
    var newItem = newList.map(item => {
      return {
        id: this.state.ChosenItem.length + 1,
        product: item[0],
        quantity: this.state.quantity
      };
    });
    this.setState({
      ChosenItem: [...this.state.ChosenItem, ...newItem]
    });
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems ChosenItem={this.state.ChosenItem} />
        <h3>Total: {this.NewTotal()}</h3>
        <Quantity
          updateQuantity={this.updateQuantity}
          value={this.state.quantity}
        />
        <DropdownMenu
          updateSelected={this.updateSelected}
          products={this.state.products}
          value={this.state.SelectedId}
        />
        <Submit submit={this.submit} />
        <CartFooter year={this.state.year} />
      </div>
    );
  }
}

export default App;
