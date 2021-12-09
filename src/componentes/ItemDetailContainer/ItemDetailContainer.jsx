import React, { useState, useEffect } from "react"
import {items} from '../Items/Items';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    const { itemId } = useParams();

   

    useEffect(() => {
        setIsLoading(true);
        const getProduct = new Promise((res) => {
          setTimeout(() => {
            res(items);
          }, 1000);
        });
    
        getProduct
          .then((result) => {
            itemId && setDetail(result.find((item) => item.id === itemId));
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, [itemId]);

       const onAdd = (cantidad) => {
        console.log({...detail, cantidad: cantidad});
        setIrAlCarrito(true);

    }



      return isLoading ? <h1>CARGANDO...</h1> : <ItemDetail {...detail } onAdd={onAdd} irAlCarrito={irAlCarrito} />;
    };

export default ItemDetailContainer;