import React from 'react';

const CartItem = (props) => {

    var ItemsToAdd = props.ChosenItem.map(item => {
        let price = ((item.product.priceInCents) / 100)
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">{item.product.name}  </div>
                    <div className="col-md-2">${price}</div>
                    <div className="col-md-2">{item.quantity}</div>
                </div>
            </div>
        )
    })
    return (

        <div className="collection-item">
            {ItemsToAdd}
        </div>
    )
};


export default CartItem;