import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Booklist() {
    return (
        <div className='container'>
            <div className="row" >
                <div className="col-lg-12 text-center mb-3" >
                    <h4>Books & autors List </h4>
                    <Link to={"/modal"} className="btn btn-primary ">Create</Link>
                </div>
            </div>

        </div>
    )
}

export default Booklist