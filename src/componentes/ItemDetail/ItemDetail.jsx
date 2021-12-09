import React from 'react';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import CartWidget from '../CartWidget/CartWidget';
import { items } from '../Items/Items';
import { Link } from 'react-router-dom'




const ItemDetail = ({id, title, price, pictureUrl, detail , stock, onAdd, irAlCarrito}) => {

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
               {irAlCarrito ? (<> <Link to="/cart"><h3>Terminar Compra</h3></Link></>) : (<><ItemCount className="SureCount" initial={0} stock={stock} onAdd={onAdd} />
               </>)}
                
               </div>
               
               
               </section>
        </div>
    )
}

export default ItemDetail;