import {React, useContext, useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'
import ComentariosContexto from '../contexto/comentariosContexto'
import Swal from 'sweetalert2';




const ComentarioForm=()=> {

  const [text,setText] = useState('')
  const [calificacion,setCalificacion]=useState(0)
  const {addItem}=useContext(ComentariosContexto)


  const handleTextChange= (e) =>{
    setText(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el objeto comentario
    const newComentario = {
      comentario: text,
      calificacion: calificacion,
    };

    // Agregar el nuevo comentario
    addItem(newComentario);

    // Mostrar la SweetAlert de éxito
    Swal.fire({
      icon: 'success',
      title: 'Comentario Agregado',
      text: 'Tu comentario se ha agregado correctamente',
      timer:2000,
      showConfirmButton:false
    });

    // Limpiar los campos del formulario después de agregar el comentario
    setText('');
    setCalificacion(0);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
      <ComentarioCalificacion select={(calificacion)=>{setCalificacion(calificacion)}}/>
      <div className='input-group'>
        <input type="text" 
        value={text}
        onChange={handleTextChange}
        placeholder='Ingrese su comentario aqui' 
        />
        <button type="submit">Guardar</button>
      </div>
      </form>

    </Card>
  )
}

export default ComentarioForm