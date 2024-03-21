import { useState } from 'react'

function App() {
  const [color, setColor] = useState('bg-black');

  return (
    <div className={`w-full h-screen ease-in duration-300 ${color}`}>
      <div className='fixed bottom-20 flex justify-center w-full p-4 bg-white'>
        <button className='bg-red-500 p-1 m-1' onClick={() => setColor('bg-red-500')}>Red</button>
        <button className='bg-green-500 p-1 m-1' onClick={() => setColor('bg-green-500')}>Green</button>
        <button className='bg-blue-500 p-1 m-1' onClick={() => setColor('bg-blue-500')}>Blue</button>
      </div>
    </div>
  )
}

export default App
