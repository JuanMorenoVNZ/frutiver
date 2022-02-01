import React from 'react'
import './mensaje.css'

const Mensaje = ({ ord }) => {
  const detailProd = ord.items.map((i) => i)
  console.log(ord)

  return (
    <div className="mensaje-box">
      <h4>Nombre del Producto: {detailProd.name}</h4>
      <h5>Total: ${ord.total}</h5>
      <h6>Id de la compra: {ord.id}</h6>
      <h6>Fecha: {ord.date}</h6>
      <h6>Email: {ord.buyer}</h6>
    </div>
  )
}

export default Mensaje
