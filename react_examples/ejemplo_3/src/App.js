import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NewPage from './components/NewPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/contact" element={<ContactPage/>}/>
        <Route exact path="/new" element={<NewPage/>}/>
      </Routes>
    </Router>

  );
}

export default App;

/*

En ReactJS, se pueden utilizar rutas (routes) para crear una aplicación de una sola página 
(Single Page Application, SPA) que permite cambiar dinámicamente 
la interfaz de usuario sin tener que cargar una nueva página.


*/