
import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'

import { Fragment } from 'react'

const Home = () => {

 

    

    return (
      <Fragment >
        <div clasName="padre">
        <div className="padreHouse">

          <div className="home">

            <div className="homeUno">

              <h1>
                Bienvenido a Mundo Fresco 
                 </h1>
                 <div className="boton">

               <Link to="/misProductos"> <button className="botonHome "> Conoce mis productos</button></Link>

             </div>
 

            </div>
          </div>
        
</div>
</div>

        </Fragment>
    )
}

export default Home;