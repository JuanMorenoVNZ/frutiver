import React, { useState, useEffect } from "react"
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';
import {items} from '../Items/Items';
import { useParams } from 'react-router-dom';




const SeccionCentral = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true);
    const { catId } = useParams();
 

    useEffect(() => {
        setLoader(true);

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
          resolve(items);
        }, 1000);
      });
  
      getItems
        .then((res) => {
          catId
            ? setData(res.filter((data) => data.category === catId))
            : setData(res);
        })
        .finally(() => {
          setLoader(false);
        });
    },[catId]);

   
 


    return loader ? (
        <h1>CARGANDO...</h1>
      ) : ( 

         <div className="titulo">
             
             
             <div className="subBor">
             <ItemList data={data} />
             
            
             </div>
            

        </div>
       

)

};

export default SeccionCentral;