
import { createContext, useEffect, useState} from 'react'

//crear contexto
const ComentariosContexto = createContext()

//crear provider: para que el contexto se reconozca en todo componente
export const ComentariosProvider = ({ children}) => {

    const [comments, setComments] = useState([])
    //estado global de carga
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchComentarios()
    },[])

    //funcion para traer los comentarios desde json server
    const fetchComentarios = async () =>{
        const response = await fetch('http://localhost:5000/Comentario/')
        const comentariosApi= await response.json()
        setComments(comentariosApi)
        setIsLoading(false)
    }

    const borrarItem = async(id) => {
        if (window.confirm("Esta seguro de borar el comentario?")){
            const response = await fetch(`http://localhost:5000/Comentario/${id}`, {method:'DELETE'})
            //asignar nuevo estado a comments
            //aplicar filter para quitar los comentarios
            //cuyo id concuerde con el parametro
            setComments(comments.filter((c)=> c.id !== id))
        }
    }

    const addItem= async (newComentario)=>{
        const response = await fetch(`http://localhost:5000/Comentario/`, 
            {method:'POST',headers:{'Content-Type':'application/json'},
                body:JSON.stringify(newComentario)})

    const data=await response.json()
    setComments([data, ... comments])
    }

    return <ComentariosContexto.Provider value={{ comments, setComments, borrarItem,isLoading,setIsLoading,addItem }}>
        { children }
    </ComentariosContexto.Provider>
}

export default ComentariosContexto