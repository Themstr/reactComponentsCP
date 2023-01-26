import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Address from './Components/Profile/Address'
import Fullname from './Components/Profile/Fullname'
import PhotoProfile from './Components/Profile/PhotoProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
       <a href=""><PhotoProfile/></a> 
      </div>
      <Fullname/>
      <Address/>
    </div>
  )
}

export default App
