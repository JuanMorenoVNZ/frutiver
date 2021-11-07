import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import fresh from '../Imagenes/fresh.jpg'



function NavBar() {
  
  return (
    <div className="NavBar">
        <Navbar  bg="black" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <img src={fresh} width="70px" height="60px"/>
                Mundo Fresco

                
                
            </Navbar.Brand>
            
         
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#frutas">Frutas</NavDropdown.Item>
              <NavDropdown.Item href="#verduras">Verduras</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            
           
     
            
           
          </Nav>
        </Navbar.Collapse>
        
        </Navbar>

        
      
    </div>
  );
}

export default NavBar;