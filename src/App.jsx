import { useState } from 'react'
import './App.css'
import Formulario from './components/Formularios'
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formulario />
    </div>
  )
}

export default App
