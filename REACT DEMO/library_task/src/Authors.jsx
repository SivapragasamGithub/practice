// src/pages/Authors.jsx
import React, { useState } from 'react';
import AuthorForm from './AuthorForm';
import AuthorList from './AuthorList';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddAuthor = (values, { resetForm }) => {
    setAuthors([...authors, values]);
    resetForm();
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
  };

  const handleDeleteAuthor = (authorToDelete) => {
    setAuthors(authors.filter(author => author !== authorToDelete));
  };

  const handleUpdateAuthor = (values, { resetForm }) => {
    setAuthors(authors.map(author => (author === editingAuthor ? values : author)));
    setEditingAuthor(null);
    resetForm();
  };

  return (
    <div className="container mt-4">
      <h2>Manage Authors</h2>
      <AuthorForm
        initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
        onSubmit={editingAuthor ? handleUpdateAuthor : handleAddAuthor}
      />
      <AuthorList authors={authors} onEdit={handleEditAuthor} onDelete={handleDeleteAuthor} />
    </div>
  );
};

export default Authors;
