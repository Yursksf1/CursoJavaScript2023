import React, { useState } from 'react';
import './Form.css';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    message: ''
  });

  const [listData, setListData] = useState([{
    name: 'Yurley',
    date: '2023-01-01',
    message: 'Hello'

}]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede enviar la información del formulario a un servidor en este caso lo guardaremos en un state que vamos a listar
    
    // guarda el valor ingresado en el formulario a la lista Data
    setListData([...listData, formData]);
    
    // limpia la informacion que esta en el formulario
    setFormData({
        name: '',
        date: '',
        message: ''
    });
  }

  const rendeList = lista => {
    const tableHead = (
        <tr>
            <th>NAME</th>
            <th>DATE</th>
            <th>MESSAGE</th>
        </tr>
    )
    const contenido = lista.map(elemento => {
        return (
            <tr>
                <td> {elemento.name}</td>
                <td> {elemento.date}</td>
                <td> {elemento.message}</td>
                <br/>
            </tr>
        )
    })
    return (
        <div className='divTable'>
            <table className='tabla'>
                {tableHead}
                {contenido}
            </table>
        </div>
    )
  }

  return (
    <div className='content'>
        <form className='formulario' onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br></br>
            <label>
                Fecha:
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </label>
            <br></br>
            <label>
                Mensaje:
                <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <br></br>
            <button type="submit">Enviar</button>
        </form>
        {listData ? rendeList(listData): null}
    </div>
  );
}

export default MyForm;
