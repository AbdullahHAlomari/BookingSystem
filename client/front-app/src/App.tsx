import { useState } from 'react'
import Card from './component/Card'
import ImageSlider from './component/ImageSlider'
import Event from './component/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Event/>
    {/* <ImageSlider/> */}
    {/* <Card/> */}
    </>
  )
}

export default App
