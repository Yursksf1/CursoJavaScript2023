import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';


const CONTACTOS = [
  {
    name:'Yurley Sanchez',
    img:'https://avatars.githubusercontent.com/u/25001142?v=4',
    cargo: "Doctora",
    redes_sociales: "https://github.com/Yursksf1",
  },
  {
    name:'Sergio Jaimes',
    img:'https://avatars.githubusercontent.com/u/128160204?v=4',
    cargo: "Medico Veterinario",
    redes_sociales: "https://github.com/sjaimes16",
  },
  {
    name:'Walter Ayala',
    img:'https://avatars.githubusercontent.com/u/56051304?v=4',
    cargo: "Auxiliar de Enfermeria",
    redes_sociales: "https://github.com/walisa2204",
  },
] 


const getContactos = (contactos) => {
  return contactos.map(contacto => {
      return <Contact contacto={contacto} />
  })
}


function App() {
  return (
    <div>
        Contactame
        <div className='contactos'>
          { getContactos(CONTACTOS) }
        </div>
    </div>
  )
}

export default App;
