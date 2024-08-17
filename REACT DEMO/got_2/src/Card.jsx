import React from 'react'

function Card({character}) {
    return (
        <div class="card" style={{ width: "18rem", margin: "5px", padding: "5px" }}>
            <img src={character.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{character.name}</h5>
                <p class="card-text">{character.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card