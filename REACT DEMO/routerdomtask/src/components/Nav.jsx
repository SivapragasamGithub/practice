import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div className="container bg-body-tertiary">
        <ul className="nav justify-content-center nav-pills">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              All
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fullstack">
              Full Stack Development
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cybersecurity">
              Cybersecurity
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/datascience">
              Data Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/career">
              Career
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Nav;