import NavBar from './componentes/NavBar/NavBar';
import SeccionCentral from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import './App.css'


function App() {


 

  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div>
      <SeccionCentral />
      
    </div>
    <div className="detaConta">
    
      <ItemDetailContainer />
    </div>
    


    </>
  );
}

export default App;
