import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul class="nav justify-content-center">

      <Link to={"/authorlist"} className='btn btn-primary m-2'>Authors</Link>
      <Link to={"/"} className='btn btn-primary m-2'>Books</Link>


    </ul>
  )
}

export default Navbar