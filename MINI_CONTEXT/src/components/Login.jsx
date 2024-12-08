import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')
    const { setuser } = useContext(UserContext) //we require that method to manipulate data
    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({ username, pass })  //sending data
    }
    return (
            <div className='h-[30vh] w-[30vw] bg-green-400 '>
                <h2>Login</h2>
                <input className='p-4 m-4 bg-gray-100' type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
                <input className='p-4 m-4 bg-gray-100' type="text" placeholder='password' value={pass} onChange={(e) => setpass(e.target.value)} />
                <button className='p-4 m-2 bg-blue-300' onClick={handleSubmit}>Login</button>
            </div>
      
    )
}

export default Login
