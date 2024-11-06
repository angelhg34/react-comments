
import { createContext, useEffect, useState} from 'react'

//crear contexto
const ComentariosContexto = createContext()

//crear provider: para que el contexto se reconozca en todo componente
export const ComentariosProvider = ({ children}) => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        fetchComentarios()
    },[])

    //funcion para traer los comentarios desde json server
    const fetchComentarios = async () =>{
        const response = await fetch('http://localhost:5000/Comentario/')
        const comentariosApi= await response.json()
        setComments(comentariosApi)
    }

    const borrarItem =(id) => {
        if (window.confirm("Esta seguro de borar el comentario?")){
            console.log(`App ${id}`)
            //asignar nuevo estado a comments
            //aplicar filter para quitar los comentarios
            //cuyo id concuerde con el parametro
            setComments(comments.filter((c)=> c.id !== id))
        }
    }

    return <ComentariosContexto.Provider value={{ comments, setComments, borrarItem }}>
        { children }
    </ComentariosContexto.Provider>
}

export default ComentariosContexto