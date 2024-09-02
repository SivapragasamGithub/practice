// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Books from './Books';
import Authors from './Authors';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Library Management</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/books">Books</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/authors">Authors</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/" element={() => <h2>Welcome to the Library Management System</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
