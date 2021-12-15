import React, { useState, useEffect } from "react"
import Item from "../Item/Item"







const ItemList = ({ items }) => {

    

    return (
        <>
            { items === [] ? null : items.map((product,i) => {
                return(
                    <Item
                    {...product} key={product.id}
                       
                    />
                )
            })}
        </>
    )
}

export default ItemList