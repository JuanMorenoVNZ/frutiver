import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import './Cart.css'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import Order from '../Order/Order'
import { RiShoppingCartLine } from "react-icons/ri";

export const Cart = () => {
  
  const { cart, total, onRemove, clearCart, getUser } = useContext(Context);
  const [form, getForm] = useState({ nombre: '', email: '' })
  const [goTicket, setGoTicket] = useState(false)

  const llenarForm = (e) => {
    const { name, value } = e.target
    getForm({
      ...form,
      [name]: value,
    })
  }
  const realTime = new Date()

  const finalizar = () => {
    getUser(form)
    const db = getFirestore()
    const ref = collection(db, 'Orden')
    const newOrder = {
      buyer: form.email,
      items: cart,
      date: realTime,
      total: total,
    }
    console.log(newOrder)
    addDoc(ref, newOrder)
    setGoTicket(true)
    clearCart()
  }
  


  return( <>
  
  <>
  <div className="tituloCart">
          <h1>Tu carrito <RiShoppingCartLine/> </h1>
          
        </div>
        <span className="linea"></span>
    {!goTicket ? (
      <div className="">
     
        {cart.map((item) => (

       
         <div className="infoCart">
         <div className="kart" key={item.id}>
           <h2 className="nombreProducto">{item.title} <button className="bEliminar" onClick={() => onRemove(item)}>X</button></h2>
           <img src={item.pictureUrl} alt={item.title} height="80px" margin="0" />
           <h5>Precio individual: ${item.price}</h5>
           <h5>Cantidad: {item.cantidad} items</h5>
           <h5>Subtotal: ${item.subtotal}</h5>
          

           
          
         </div>
         </div>
         
        ))}
        {total > 0 ? (
          <div>
            <p className="totalcompra">Total compra: $ {total}</p>
            <button className="B-vaciar" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        ) : (
          <div>
            <p>No agregaste nada todavía</p>
            <h2><Link to="/misProductos">Vuelve a productos</Link></h2>
          </div>
        )}
        <div />
        <div className="formTi">
          <form metod="POST" onSubmit={finalizar}>
            <h3 className="">Completá tus datos para finalizar la compra</h3>
            <label name="nombre" value="name">Nombre: <input
              onChange={llenarForm}
              type="name"
              name="nombre"
              placeholder="Ingresa tu nombre"
            /></label>  
            <label name="email" value="email">Correo: <input
              onChange={llenarForm}
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
            /></label>
            <button className="B-vaciar"
              disabled={
                cart?.length === 0 ||
                form.nombre === '' ||
                form.email === ''
              }
            >
              Finalizar Compra
            </button>
          </form>
        </div>
      </div>
    ) : (
      <>
        <Order />
      </>
    )}
  </>
</>
)
}
   
export default Cart