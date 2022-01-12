import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, title,  price, description, pictureUrl,stock}) => {
    return(

        <Card className="padreHouse mb-6-4-2" style={{ width: '16rem' }}>
      
        <Card.Img variant="top"  src={pictureUrl}  />
       
       <Card.Body>
        <Card.Title className="text-light ">{title}</Card.Title>
       <Card.Text>
        Precio: ${price}
    </Card.Text>
    <Link to={`/product/${id}`} className="ItemLine">
    <Button className="" variant="dark">Ir a pedir</Button>
    </Link>
  </Card.Body>
 
</Card>
        
       
       
    )
}

export default Item