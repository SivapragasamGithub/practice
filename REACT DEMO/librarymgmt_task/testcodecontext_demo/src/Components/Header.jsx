import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header({cart}) {
  return (
    <div className='navbar'>
        <div className="logo">foodcart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Cart"}><span>{cart.length}</span>    View Cart</Link>
            </li>
        </ul>
    </div>
    
  )
}

export default Header