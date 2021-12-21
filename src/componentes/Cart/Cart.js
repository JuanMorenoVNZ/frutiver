import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import '../NavBar/NavBar.css'


export const Cart = () => {
  
  const { cart, unidades, total, onRemove } = useContext(Context);


  return unidades > 0 ? (
    <div className="carPadre">
    <div className="carTitle">
      <h1>Tus productos seleccionados</h1>
      </div>
      {cart.map(item => {
        return (
          <div className="carPage">
          <article key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt={item.title} height="120px" margin="0" />
            <h5>Precio individual: ${item.price}</h5>
            <h5>Cantidad: {item.cantidad} items</h5>
            <h5>Subtotal: ${item.subtotal}</h5>

            
            <button onClick={() => onRemove(item.id)}>Eliminar</button>
          </article>
          </div>
        );
      })}
      <h3>Total: ${total}</h3>
   
    </div>
  ) : (
    <div className="carFind">
      <h2>No hay productos</h2>
      <Link to="/misProductos"><h4>Ir a compra</h4></Link>
    </div>
  );
};
