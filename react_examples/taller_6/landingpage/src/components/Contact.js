import './Contact.css';



function Contact(props) {
  console.log('props', props)
  const contacto = props.contacto
    return (
      <div className='contact'>
        <p>{contacto.name}</p> 
        <img className="imagen" src={contacto.img} />
        <div className='resources'>
            <div>
                {contacto.cargo}
            </div>
            <a href={contacto.redes_sociales}>
                Contacta me!
            </a>

        </div>
        
      </div>
    );
  }

  export default Contact;
