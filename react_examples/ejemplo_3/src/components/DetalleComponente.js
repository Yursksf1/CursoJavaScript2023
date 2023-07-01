// import './ContactPage.css';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';


function DetalleComponente(props) {
  const { id } = useParams();

    return (
      <div>
        <NavBar></NavBar>
        <h1>Detalle del Componente {id}</h1>

        <p>Esta es la pagina DetalleComponente</p> 
      </div>
    );
  }

  export default DetalleComponente;
