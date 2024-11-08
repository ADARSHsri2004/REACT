import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <div className='flex flex-col items-center gap-5'>

        <h1 className='text-5xl m-4'>HELLO ADARSH !!!</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>

  )
}

export default App
