import { React, useState } from 'react'
import NavbarComponent from './components/nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NavbarComponent />
  )
}

export default App
