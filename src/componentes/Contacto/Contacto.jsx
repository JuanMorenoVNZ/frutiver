import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../NavBar/NavBar.css'

const Contacto = () => {

    

    return (
      <div className="padreHouse">
        <div className="contacto ">
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Correo</Form.Label>
    <Form.Control type="email" placeholder="Ingresa tu correo" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contaseña</Form.Label>
    <Form.Control type="password" placeholder="Ingresa tu correo" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Aceptar" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          
        </div>
        </div>
    )
}

export default Contacto;