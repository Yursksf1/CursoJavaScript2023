// import './ContactPage.css';
import NavBar from './NavBar';


function ContactPage(props) {
    return (
      <div>
        <NavBar></NavBar>
        <p>Esta es la pagina de contact</p> 
        <img className="imagen" src='https://www.mercator-group.com/wp-content/uploads/2016/08/mercator-group-img-telefono-contacto.png' />    
      </div>
    );
  }

  export default ContactPage;
