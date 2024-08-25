import React from 'react'
import { Link } from 'react-router-dom'

function Card({ character, onDelete }) {
    const handleDelete = () => {
        onDelete(character.id)
    }

    return (
        <div className="card" style={{ width: "18rem", margin: "5px", padding: "5px" }}>
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.description}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    <Link to={`/modal/${character.id}`} className="btn btn-secondary">Edit</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
