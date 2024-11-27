import {React, useContext, useState} from 'react'
import Card from './Card'
import { FaTimes } from "react-icons/fa";
import ComentariosContexto from '../contexto/comentariosContexto';
export const ComentarioItem = ({comentario, calificacion, id}) => {

    //manejo del estado de un comentario:
    //comentario y calificacion como atributo
    //mediante el uso de Estados
    const [comment, setComentario] = useState(comentario.comentario)
    const [rating, setRating] = useState(comentario.calificacion)
    const[identificacion,setIde]=useState(comentario.id)
    
    //traer del contexto borrarItem
    const {borrarItem}=useContext(ComentariosContexto)



  return (
    <Card reverse={true}>
      <div className='num-display'>{calificacion}</div>
      <div className='text-display'>{ comentario }</div>
      <button className='close' onClick={()=>{borrarItem(id)}}>
        <FaTimes color='purple' />
      </button>
    </Card>
    // <div className="card">
    //     <div className='num-display'>{rating}</div>
    //     <div className='text-display'>{ comment }</div>
    //     <button onClick={cambiarRating}>
    //         Cambiar Calificacion
    //     </button>
    // </div>
  )
}
