import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title,  price, description, pictureUrl,stock}) => {
    return(
        
        <Card>
            <Card.Body>
            
                <Card.Title>
                    {title}
                </Card.Title>
                <Link to={`/product/${id}`} className="ItemLine">
                <Card.Img
                    variant="top"
                    src={pictureUrl} 
                />
                </Link>
                <Card.Text>
                    ${price}
                </Card.Text>
                
               
                 
                
            </Card.Body>
        </Card>
       
    )
}

export default Item