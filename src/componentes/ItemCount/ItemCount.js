import React, {Fragment, useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import SeccionCentral from '../ItemListContainer/ItemListContainer'
import '../Item/Item.css'

 

const ItemCount = ({initial, stock}) =>  {
    let [number, setNumber] = useState(initial)

    const incrementar = () => {
        if (number < stock) setNumber(++number)
    };


    const disminuir = () => {
        if (number > 0) setNumber(--number)
    };

   
    
  
    return(
        <Fragment>
           
            <div className="conta btn btn-secondary">
            
            <button className="btn btn-secondary" onClick={incrementar} disabled={number === stock}>+</button><h5 className="btn-secondary">{number}</h5><button className="btn btn-secondary" onClick={disminuir}  disabled={number === initial}>-</button>
            </div>
           
        </Fragment>
    )
}

export default ItemCount;