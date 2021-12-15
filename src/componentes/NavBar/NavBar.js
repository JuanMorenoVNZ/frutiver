import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import {Cart} from '../Cart/Cart'



function NavBar() {

  
   
  
  return (
    <div className="NavBar">
        <Navbar  bg="black" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand >
                <img src='/Imagenes/fresh.jpg' width="70px" height="60px"/>
                Mundo Fresco

                
                
            </Navbar.Brand>
            
         
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Productos">
             <NavDropdown.Item as={Link} to="/misProductos">Todos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/misProductos/frutas">Frutas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/misProductos/verduras">Verduras</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/cart"  ><CartWidget /> </Nav.Link>
           
     
            
           
          </Nav>
        </Navbar.Collapse>
        
        </Navbar>

        
      
    </div>
  );
}

export default NavBar;