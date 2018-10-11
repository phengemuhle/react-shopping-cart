import React from 'react';

const Quantity = (props) => {
    return (
        <form>
            <label className="Label">Quantity</label><br />
            <input className="quantSelector" value={props.value} onChange={props.updateQuantity} type="number" min='1' />
        </form>
    )
}
export default Quantity;