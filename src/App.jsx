import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todos } from './compponents/Todos'

function App() {
  const [show, setShow] = useState(true);
  useEffect(()=>{
    return ()=>{
      console.log("Unmounting Todos component")
   }
  })

  return (
    <div className="App">     
     { (show) ? <Todos /> : null }     
     <button onClick={()=>{
       setShow(!show)
     }}>{ (show) ? "Hide" : "Show" }</button>
    </div>
  )
}

export default App
