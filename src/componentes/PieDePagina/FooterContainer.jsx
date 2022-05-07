import React from 'react'
import Footer from '../Footer'
import Icon from '../Icons'
import { Link } from 'react-router-dom'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Sobre Nosotros</Footer.Title>
                    <Footer.Link  as={Link}  to="/blog">Blog</Footer.Link>
                   
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>Redes sociales</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/juan.m.jm.73/"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-whatsapp" />Whatsapp</Footer.Link>
                </Footer.Column>
               
                <Footer.Column>
                <Footer.Title>Contacto</Footer.Title>
                <Footer.Link  as={Link}  to="/contacto"><Icon className="fas fa-at"/>Gmail</Footer.Link>
                    <Footer.Link as={Link}  to="/contacto">Soporte</Footer.Link>
                </Footer.Column>
                
              
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}