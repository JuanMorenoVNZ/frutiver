import React, {Fragment, useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import SeccionCentral from '../ItemListContainer/ItemListContainer'
import Fresa from '../Imagenes/Fresa.jpg'
 

const ItemCount = ({initial, stock, title}) =>  {
    let [number, setNumber] = useState(initial)

    const incrementar = () => {
        if (number < stock) setNumber(++number)
    };


    const disminuir = () => {
        if (number > 0) setNumber(--number)
    };

   
    
  
    return(
        <Fragment>
           
            <div>
            <img src={Fresa} width="100px" height="60px"/>
            <h1>{title}</h1>
            <button className="btn btn-secondary" onClick={incrementar} disabled={number === stock}>+</button><h5>{`La cantidad es: ${number}`}</h5><button className="btn btn-secondary" onClick={disminuir}  disabled={number === initial}>-</button>
            </div>
           
        </Fragment>
    )
}

export default ItemCount;
