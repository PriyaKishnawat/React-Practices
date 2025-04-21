import { useState } from 'react'
import './App.css'
import RandomUser from "./Components/RandomUser";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomUser />
    </>
  )
}

export default App
