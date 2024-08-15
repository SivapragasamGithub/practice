import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='container bg-body-tertiary'>
            

        <ul class="nav justify-content-center nav-pills">

            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/"><h5>All</h5></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/fullstackdevelopment"><h5>Full stack Development</h5></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Cybersecurity"><h5>Cybersecurity</h5></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/datascience"><h5>Data Sceince</h5></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/career"><h5>Career</h5></Link>
            </li>

        </ul>
        <hr></hr>
    </div>
    )
}

export default Nav