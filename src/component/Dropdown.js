import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropdownMenu = (props) => {
    let people = props.products.map(item => {
        return (
            { key: item.id, value: item.id, text: item.name + " " + "$" + ((item.priceInCents) / 100) }
        )
    })
    return (
        <>
            <label className="Label" >Products</label>
            <Dropdown id="drop" onChange={props.updateSelected} className="dropDownMenu" placeholder='Skills' fluid multiple selection options={people}></Dropdown>
        </>
    )
}

export default DropdownMenu


