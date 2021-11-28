import React from 'react';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"



const ItemDetail = ({title, price, pictureUrl, detail}) => {

    return (
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
                    {detail}
                </Card.Text>
                <Card.Text>
                    Tiene un precio de ${price}
                </Card.Text>
               
                 
                
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;