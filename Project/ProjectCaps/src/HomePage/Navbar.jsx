import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    // Check authentication state on component mount
    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus === 'true');
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login page
    };

    const handleLogin = () => {
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/jobspage">Freelancer Market Place</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/jobspage"}><h4>Jobs</h4></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/userpage"}><h4>Candidate</h4></Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">


                        {/* Conditionally render buttons */}
                        {!localStorage.userId ? (
                            <Link className="btn primary me-2" to="/login" onClick={handleLogin}>
                                Login
                            </Link>
                        ) : (
                            <>
                                <Link className="btn primary me-2" to={`/Profile/${userId}`}>Profile</Link>
                                <button className="btn primary me-2" onClick={handleLogout}>
                                    Logout
                                </button>

                            </>
                        )}

                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
