import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ADARSHsri2004')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setdata(data)
    //         })

    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> Github followers:{data.followers}
        <img  src={data.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github
export const githubInfoLoader = async() => {
   const response= await fetch('https://api.github.com/users/ADARSHsri2004')
   return response.json()
}
