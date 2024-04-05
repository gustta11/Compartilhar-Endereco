
import './App.css'
import Rodape from './layout/Footer'
import Nav from './layout/NavBar'
import Formulario from './components/Formulario'

function App() {
  

  return (
      <div className='containerGrid'>

        <div className='header'>
            <Nav/>
        </div>

        <div className='main'>
            <Formulario/>
        </div>

        <div className='footer'>
            <Rodape/>
        </div>

      </div>
  )
}

export default App
