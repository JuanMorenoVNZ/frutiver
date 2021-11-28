import React, { useState, useEffect } from "react"
import {items} from '../Items/Items';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])

    useEffect(() => {

        const fecthDetail = new Promise((res, rej) => {
            res(items[0])
        })
        fecthDetail.then((getDetail) => {
            setTimeout(() => {
                setDetail(getDetail)
                
            }, 10000)
        })
        
    }, [detail])



    return (
        <> 
        <ItemDetail {...detail}  />
        </>
    )
}

export default ItemDetailContainer;