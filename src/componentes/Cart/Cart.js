import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import '../NavBar/NavBar.css'

import { getFirestore, collection, addDoc } from 'firebase/firestore'
import Order from '../Order/Order'

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
    onRemove()
  }
  


  return( <>
  
  <>
    {!goTicket ? (
      <div className="">
        <h1>Estas son tus compras</h1>
        {cart.map((item) => (
         <div className="carPage">
         <article key={item.id}>
           <h2>{item.title}</h2>
           <img src={item.pictureUrl} alt={item.title} height="120px" margin="0" />
           <h5>Precio individual: ${item.price}</h5>
           <h5>Cantidad: {item.cantidad} items</h5>
           <h5>Subtotal: ${item.subtotal}</h5>

           
           <button onClick={() => onRemove(item)}>Eliminar</button>
         </article>
         </div>
         
        ))}
        {total > 0 ? (
          <>
            <p className="totalcompra">Total compra: $ {total}</p>
            <button className="B-vaciar" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <>
            <p>No agregaste nada todavía</p>
            <h2><Link to="/misProductos">Vuelve a productos</Link></h2>
          </>
        )}
        <div />
        <div className="formuser">
          <form metod="POST" onSubmit={finalizar}>
            <p>Completá tus datos para finalizar la compra</p>
            <input
              onChange={llenarForm}
              type="name"
              name="nombre"
              placeholder="Nombre"
            />
            <input
              onChange={llenarForm}
              type="email"
              name="email"
              placeholder="Email"
            />
            <button
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

