import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(0)
   const increment=()=>{
    if(counter<20){
        counter+=1;
        setCounter(counter);
    }
   }
   const decrement=()=>{
    if(counter>0){
    counter-=1;
    setCounter(counter);
  }
}
  return (
    <> 
    <h1>Counter value : {counter} </h1>
    <button onClick={increment}>Increase value :{counter}</button><br/><br/>
    <button onClick={decrement}>Decrease value :{counter} </button><br/><br/>
    <button onClick={()=>{setCounter(0)}}> Reset</button>
    </>
  )
}
export default App
