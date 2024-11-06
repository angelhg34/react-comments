import {React, useContext} from 'react'
import { ComentarioItem } from './ComentarioItem'
import { AnimatePresence, motion } from 'framer-motion'
import ComentariosContexto from '../contexto/comentariosContexto'


const ComentarioLista = () => {

    const {comments} = useContext(ComentariosContexto)
    console.log(comments)

    if(comments.length===0 || !comments){
        return <p>No hay comentarios</p>
    }
    else{
        return (
            <AnimatePresence>
                            <div className='comments'>
            <ul>
                {
                    comments.map(comentario => 
                        <motion.div
                            key={comentario.id}
                            // initial={{opacity:0,y:-20}}
                            // animate={{opacity:1}}
                            // exit={{opacity:0,y:20}}
                            // transition={{delay:0.2}}
                            whileHover={{scale:0.8}}
                            whileTap={{scale:0.8}}
                        >
                            <ComentarioItem 
                            key={comentario.id}
                            comentario={comentario.comentario}
                            calificacion={comentario.calificacion}
                            />
                        </motion.div>
                    )
                }
            </ul>
        </div>
            </AnimatePresence>

          )
    }
  
}

export default ComentarioLista