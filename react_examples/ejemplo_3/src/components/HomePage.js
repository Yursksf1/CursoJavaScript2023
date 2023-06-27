// import './HomePage.css';
import NavBar from './NavBar';


function HomePage(props) {
    return (
      <div>
        <NavBar></NavBar>
        <p>Esta es la pagina de Home</p> 
        <img className="imagen" src='https://static7.depositphotos.com/1024768/698/v/450/depositphotos_6988905-stock-illustration-cartoon-house.jpg' />

      </div>
    );
  }

  export default HomePage;
