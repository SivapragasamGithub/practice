// src/components/BookList.jsx
import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => (
  <div>
    <h3>Books</h3>
    <ul className="list-group">
      {books.map((book, index) => (
        <li key={index} className="list-group-item">
          <div>
            <strong>{book.title}</strong> by {book.author}
          </div>
          <div>
            ISBN: {book.isbn} | Published: {new Date(book.publicationDate).toLocaleDateString()}
          </div>
          <div>
            <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(book)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(book)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;
