
import React, { useContext } from 'react';
import { RiShoppingCartLine } from "react-icons/ri";
import '../NavBar/NavBar.css'
import { Context } from '../Context/Context';


const CartWidget = () => {

    const { unidades } = useContext(Context);


    return (
        unidades > 0 && (
        <div className="Car">
         <div >
             <RiShoppingCartLine  />
             
        </div>
        <div>
        <p>{unidades}</p>
        </div>
        </div>
        )
        );


};

export default CartWidget;
