import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import Card from './componentes/Card';
import ComentarioLista from './componentes/ComentarioLista';
import Header from './componentes/Header';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './paginas/About';
import AboutConLink from './componentes/AboutConLink';
import VolverHome from './componentes/VolverHome';
import { ComentariosProvider } from './contexto/comentariosContexto';
function App() {

    // const [comments, setCommments] = useState(comentarios)

    const titulo="App de comentarios"
    const Autor ="Miguel Ortiz y Nicolas Fandiño"
    const Ficha = 2902093

    const loading = false;
    if(loading === true) return ( <h1> Cargando comentarios...</h1> )



  return (
          <ComentariosProvider>
            <Router>
          <div
            className='container'>
                <Header titulo={titulo} autor={Autor} ficha={Ficha}/>
                <Routes>
                  <Route exact path='/' element={
                    <>
                      <ComentarioForm />
                      <ComentarioStats/>
                      <ComentarioLista/>
                      {/* <AboutConLink/> */}
                    </>}>
                  </Route>
                  <Route exact path='/about' element={
                    <>
                      <About titulo={titulo}  autor={Autor} ficha={Ficha}/>
                      <VolverHome/>
                    </>
                  }></Route>
                </Routes>
          </div>
        </Router>
        </ComentariosProvider>


  )
}

export default App