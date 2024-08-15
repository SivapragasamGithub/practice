import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='container bg-body-tertiary'>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <ul class="nav justify-content-center nav-pills">

                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">All</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/fullstack">Full stack Development</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Cybersecurity">Cybersecurity</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Datasceince">Data Sceince</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Carrer">Career</Link>
                </li>

            </ul>
            <hr></hr>
        </div>
    )
}

export default Nav