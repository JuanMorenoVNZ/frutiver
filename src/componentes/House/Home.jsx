import Carousel from 'react-bootstrap/Carousel'
import '../NavBar/NavBar.css'

const Home = () => {

    

    return (
        <>
          <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block m-auto karusel"
      src="/Imagenes/foto1.jpg"
      alt="fresa"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block m-auto karusel"
      src="/Imagenes/foto2.jpg"
      alt="Durazno"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block m-auto karusel"
      src="/Imagenes/foto4.jpg"
      alt="Manzana"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Home;