import React from 'react';
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'




const SeccionCentral = () => {

   
 


    return (

         <div className="titulo">
             
             
             <div>
                 <ItemCount initial={0} stock={10} title={"Fresas"} />
             </div>

        </div>
       

)

};

export default SeccionCentral;