import React, { useState, useEffect } from "react"
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';
import {items} from '../Items/Items';




const SeccionCentral = () => {

    const [data, setData] = useState([])
 
    useEffect(() => {

        const fetchData = new Promise((res, rej) => {
            res(items)
        })
        fetchData.then((getData) => {
            setTimeout(() => {
                setData(getData)
                
            }, 2000)
        })
        
    }, [data])

   
 


    return (

         <div className="titulo">
             
             
             <div className="subBor">
             <ItemList data={data} />
             
            
             </div>
            

        </div>
       

)

};

export default SeccionCentral;