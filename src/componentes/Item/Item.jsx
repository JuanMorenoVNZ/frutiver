import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({title,  price, description, pictureUrl}) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Img
                    variant="top"
                    src={pictureUrl} 
                />
                <Card.Text>
                    ${price}
                </Card.Text>
               
                 <ItemCount initial={0} stock={10} />
                
            </Card.Body>
        </Card>
    )
}

export default Item