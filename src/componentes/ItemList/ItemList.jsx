import React, { useState, useEffect } from "react"
import Item from "../Item/Item"




const dataList = [
   { id: '1',
    title: 'Fresas',
    price: 5,
    pictureUrl: '/Imagenes/foto1.jpg',
    stock: 10
},
{
    id: '2',
    title: 'Durazno',
    price: 6,
    pictureUrl: '/Imagenes/foto2.jpg',
    stock: 10
},
{
    id: '3',
    title: 'Manzana',
    price: 9,
    pictureUrl: '/Imagenes/foto3.jpg',
    stock: 10
},
]

const ItemList = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = new Promise((res, rej) => {
            res(dataList)
        })
        fetchData.then((getData) => {
            setTimeout(() => {
                setData(getData)
            }, 2000)
        })
    }, [data])

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