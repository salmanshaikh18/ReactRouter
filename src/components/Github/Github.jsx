import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Github = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/salmanshaikh18')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <div className='text-center m-5 bg-gray-500 text-white p-4 text-3xl'>
        Github Follwers: {data.followers} 
        <img className='' src={data.avatar_url} alt="GitHub Profile Picture" />
    </div>
  )
}

export default Github