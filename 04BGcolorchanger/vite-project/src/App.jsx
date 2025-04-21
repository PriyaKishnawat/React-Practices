import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState('black')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('#FF007F')} style={{backgroundColor:'#FF007F'}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Pink
          </button>
          <button onClick={() => setColor('Blue')} style={{backgroundColor:'Blue'}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Blue
          </button>
          <button onClick={() => setColor('red')} style={{backgroundColor:'red'}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Red
          </button>
          <button onClick={() => setColor('green')} style={{backgroundColor:'green'}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Green
          </button>
          <button onClick={() => setColor('yellow')} style={{backgroundColor:'yellow'}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Yellow
          </button>
          <button onClick={() => setColor('Brown')} style={{backgroundColor:'brown'}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Brown
          </button>
          </div>

      </div>
    </div>
    
  )
}

export default App
