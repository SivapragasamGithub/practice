import React from 'react'
import { Link } from 'react-router-dom'

function Authors({ author, handleDeleteClick }) {
    return (
        <div class="card" style={{ width: "18rem", margin: "5px", padding: "5px" }}>
            <img src={author.image} class="card-img-top" alt="..." style={{ width: "250px", height: "250px", margin: "10px" }} />
            <div class="card-body">
                <h5 class="card-title">{author.name}</h5>
                <p class="card-text">{author.birthdate}</p>
                <p class="card-text">{author.bio}</p>
                <Link className='btn btn-primary mb-3 m-1' to={`/authorModal/${author.id}`}>Edit</Link>
                <button className='btn btn-primary mb-3 m-1' onClick={() => { handleDeleteClick(author.id) }}>Delete</button>
            </div>
        </div>
    )
}

export default Authors