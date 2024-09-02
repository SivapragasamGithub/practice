// src/components/AuthorList.jsx
import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => (
  <div>
    <h3>Authors</h3>
    <ul className="list-group">
      {authors.map((author, index) => (
        <li key={index} className="list-group-item">
          <div>
            <strong>{author.name}</strong> (Born: {new Date(author.birthDate).toLocaleDateString()})
          </div>
          <div>{author.biography}</div>
          <div>
            <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(author)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(author)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default AuthorList;
