import React, {Fragment, useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import '../Item/Item.css'

 

const ItemCount = ({initial, stock, addItem}) =>  {
    const [number, setNumber] = useState(initial);

    const incrementar = () => {
        if (number < stock) setNumber(number + 1)
    };


    const disminuir = () => {
        if (number  > 0) setNumber(number - 1)
    };

    
   
    
  
    return(
        <Fragment>
           
            <div className="conta btn btn-secondary">
            
            <button className="btn btn-secondary" onClick={incrementar} disabled={number === stock}>+</button><h5 className="btn-secondary">{number}</h5><button className="btn btn-secondary" onClick={disminuir}  disabled={number === initial}>-</button>
            
            </div>
            
            <button   onClick={() => addItem(number)} disabled={ number === 0}>
                <h4> Agregar al carrito</h4>
                </button>

            
           
        </Fragment>
    )
}

export default ItemCount;