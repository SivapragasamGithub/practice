import React, { useContext } from 'react'
import UserContext from './UserContext'

function Home() {
    const siva = useContext(UserContext)
  return (
    <div className='container m-3' >
            <h1>Google - {siva.userName}</h1>
            <input type="text" className='form-control mb-1' placeholder='search Google or type a URL' />
            <button className='btn btn-primary m-2' > Google Search</button>
            <button className='btn btn-primary m-1' > Im Feeling Lucky</button>
        </div>
  )
}

export default Home