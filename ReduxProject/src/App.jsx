import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Components/User';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Redux Project</h1>
    <User />
   </div>
  )
}

export default App
