import { useState } from 'react'
import Card from './component/Card'
import ImageSlider from './component/ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImageSlider/>
    <Card/>
    </>
  )
}

export default App
