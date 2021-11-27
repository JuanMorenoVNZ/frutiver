import React, { useState, useEffect } from "react"
import Item from "../Item/Item"







const ItemList = ({ data }) => {

    

    return (
        <>
            { data === [] ? null : data.map((product,i) => {
                return(
                    <Item
                        key={product.id}
                        title={product.title}
                        stock={product.stock}
                        price={product.price}
                        pictureUrl={product.pictureUrl}
                    />
                )
            })}
        </>
    )
}

export default ItemList