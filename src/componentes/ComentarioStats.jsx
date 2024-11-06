import {React, useContext} from 'react';
import ComentariosContexto from '../contexto/comentariosContexto';

export default function ComentarioStats() {

  const {comments}=useContext(ComentariosContexto)

  const totalComentarios = comments.length;

  const promedio = totalComentarios > 0 ? comments.reduce((acc, comentario) => acc + comentario.calificacion, 0) / totalComentarios : 0;

  // let totalPromedio=
  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {totalComentarios}</h4>
      <h4>Calificación promedio: {promedio}</h4>
    </div>
  );
}
