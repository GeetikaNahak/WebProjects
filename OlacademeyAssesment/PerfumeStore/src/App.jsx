import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hi
      <HomePage/>
    </>
  )
}

export default App
