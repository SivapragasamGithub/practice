import React from 'react'



function Books({ book,handleDeleteClick,handleEditClick }) {


    return (
        <div class="card" style={{ width: "18rem", margin: "5px", padding: "5px" }}>
            <img src={book.image} class="card-img-top" alt="..." style={{ width: "250px", height: "250px", margin: "10px" }} />
            <div class="card-body">
                <h5 class="card-title">{book.title}</h5>
                <p class="card-text">{book.author}</p>
                <p class="card-text">{book.ISBNNumber}</p>
                <p class="card-text">{book.PublicationDate}</p>
                <button className='btn btn-primary mb-3 m-1' onClick={() => { handleEditClick(book) }}>Edit</button>
                <button className='btn btn-primary mb-3 m-1' onClick={() => { handleDeleteClick(book.id) }}>Delete</button>
            </div>
        </div>
    )
}

export default Books
