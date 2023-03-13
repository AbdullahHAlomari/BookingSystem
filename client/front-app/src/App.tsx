import { useState } from 'react'
import Event from './component/Event'
import HomePage from './component/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* <Event/> */}
    <HomePage/>
    </>
  )
}

export default App
