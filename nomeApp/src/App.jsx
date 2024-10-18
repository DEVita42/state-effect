import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Clock from './Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
      <Clock></Clock>
    </>
  )
}

export default App
