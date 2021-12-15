import React, { useContext, useState } from 'react';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import CartWidget from '../CartWidget/CartWidget';
import { items } from '../Items/Items';
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context';




const ItemDetail = ({id, title, category, price, pictureUrl, detail , stock}) => {

    const [purchased, setPurchased] = useState(false);
    const { onAdd } = useContext(Context);
  
    const addItem = (count) => {
      if (count > 0) {
        onAdd({ id, title, category, pictureUrl, price, stock }, count);
        setPurchased(true);
      } else {
        alert('La cantidad debe ser mayor a cero');
      }
    };

    return (
        <div className="detailContainer">
            <section className="detailConta"> 
       <div className="detailImg">
           <img src={pictureUrl} alt="Imagen"></img>
       </div>
       <div className="desto">
         <h1>{title}</h1>
               </div>
               <div className="destro">
               <h3>Precio ${price}</h3>
               </div>
               
               <div className="descrip">
               <h5>{detail}</h5>  
               </div>
               <div className="descripSure">
               {!purchased ? (
        <ItemCount stock={stock} initial={0} addItem={addItem} />
      ) : (
        <Link to="/cart">Terminar compra</Link>
      )}
                
               </div>
               
               
               </section>
        </div>
    )
}

export default ItemDetail;