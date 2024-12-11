import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cakeview from './features/cake/Cakeview'
import UserView from './features/user/userView'
import CreamView from './features/ice_cream/creamView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Cakeview />
        <CreamView />
        <UserView />
      </div>
    </>
  )
}

export default App
