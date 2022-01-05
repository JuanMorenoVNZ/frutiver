import NavBar from './componentes/NavBar/NavBar';
import SeccionCentral from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Home from './componentes/House/Home'
import './App.css'
import { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from './componentes/Contacto/Contacto.jsx'
import Blog from './componentes/Blog/Blog';
import {Cart} from './componentes/Cart/Cart'
import { CartFuncion } from './componentes/Context/Context';
import { FooterContainer } from './componentes/PieDePagina/FooterContainer'




function App() {

 

 

  return (
    <CartFuncion>
    <Fragment>
    <BrowserRouter>
      <NavBar/>
      
       <Routes>
       <Route path="/" element={<Home />} />

        <Route path="/misProductos" element={<SeccionCentral />} />
        <Route path="/misProductos/:catId" element={<SeccionCentral />} />
       

        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/cart" element={<Cart/>} />

        
        </Routes>
        <FooterContainer/>
    </BrowserRouter>

    


    </Fragment>
    </CartFuncion>
  );
}

export default App;
