import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='flex items-center justify-center bg-gray-400'>
      user:{userid}
    </div>
  )
}

export default User
