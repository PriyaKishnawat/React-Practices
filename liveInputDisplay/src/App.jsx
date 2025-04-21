import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  function clear(){
      setText("")
  }

  return (
    <>
      <input 
      type='text' 
      placeholder='Type here !'
      value={text}
      onChange={(e) => setText(e.target.value)}
      ></input><br/><br/>
      <p className='bg-amber-400 text-white '>You Typed :{text}</p>
      <button onClick={clear}>Reset</button>
    </>
  )
}

export default App
