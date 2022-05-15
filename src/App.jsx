import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todos } from './compponents/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">     
     <Todos />
    </div>
  )
}

export default App
