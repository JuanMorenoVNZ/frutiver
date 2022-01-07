import React, { useState, useEffect } from "react"
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';
import {items} from '../Items/Items';
import { useParams } from 'react-router-dom';
import db from '../Firebase/Firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';





const SeccionCentral = () => {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const { catId } = useParams();
   
   
    useEffect(() => {
      setLoader(true);
      
      const myItems = catId
        ? query(collection(db, 'products'), where('category', '==', catId))
        : collection(db, 'products');
     
      
      getDocs(myItems)
        .then((res) => {
          const results = res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
        
          setItems(results);
          }) 
        .finally(() => setLoader(false));
    }, [catId]);
    

   
 


    return loader ? (
        <h1>CARGANDO...</h1>
      ) : ( 

         <div className="titulo padreHouse">
             
             
             <div className="subBor">
               <div className="subBorHijo">
             <ItemList items={items} />
             </div>
            
             </div>
            

        </div>
       

)

};

export default SeccionCentral;