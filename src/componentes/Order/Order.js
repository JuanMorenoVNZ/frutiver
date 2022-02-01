import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'
import Mensaje from '../Mensaje/Mensaje'
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import './order.css'


const Order = () => {
  const [order, setOrder] = useState([])
  const { userEmail } = useContext(Context)
  const { email } = userEmail

  useEffect(() => {
    const db = getFirestore()
    const ref = query(collection(db, 'Orden'), orderBy('date'))
    getDocs(ref).then((snapshot) => {
      const orden = snapshot.docs.map((doc) => {
        const data = doc.data()
        const { date } = data
        const fecha = new Date(date.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat('es-Es', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(fecha)
        return {
          id: doc.id,
          ...data,
          date: normalizedCreatedAt,
        }
      })
      setOrder(orden.filter((b) => b.buyer === email))
    })
  }, [email])
  return (
    <div className="order-box padreOrden">
      {order?.lenght === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="padreOrden">
          <h1 className="tituloOrden">Aca dejamos tus tikets de compra</h1>
          {order.map((ord) => (
            <Mensaje key={ord.id} ord={ord} />
          ))}
        </div>
      )}
      <Link to="/"><button className="boton">
  <span class="shadow"></span>
  <span class="edge"></span>
  <span class="front text"> Inicio
  </span>
</button></Link>
    </div>
  )
}

export default Order
