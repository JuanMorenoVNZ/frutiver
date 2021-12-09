import React, { useState, useEffect } from "react"
import Item from "../Item/Item"







const ItemList = ({ data }) => {

    

    return (
        <>
            { data === [] ? null : data.map((product,i) => {
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