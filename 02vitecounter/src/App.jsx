import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = () => {
    setCounter((prev) => prev+1)
    setCounter((prev) => prev+1)
    setCounter((prev) => prev+1)
    setCounter((prev) => prev+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Vite react with chuckles {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
