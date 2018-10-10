import React, { Component } from 'react';

const Quantity = () => {
    return (
        <form>
            <label className="Label">Quantity</label><br/ >
            <input className="quantSelector" type="number" min='0' name="quant" />
        </form>
    )
}
export default Quantity;