import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title,  price, description, pictureUrl,stock}) => {
    return(

        <Card className="padreHouse" style={{ width: '18rem' }}>
        <Link to={`/product/${id}`} className="ItemLine">
        <Card.Img variant="top"  src={pictureUrl}  />
         </Link>
       <Card.Body>
        <Card.Title>{title}</Card.Title>
       <Card.Text>
        ${price}
    </Card.Text>
    <Button variant="primary">Ir a pedir</Button>
  </Card.Body>
</Card>
        
       
       
    )
}

export default Item