// src/pages/Books.jsx
import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (values, { resetForm }) => {
    setBooks([...books, values]);
    resetForm();
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (bookToDelete) => {
    setBooks(books.filter(book => book !== bookToDelete));
  };

  const handleUpdateBook = (values, { resetForm }) => {
    setBooks(books.map(book => (book === editingBook ? values : book)));
    setEditingBook(null);
    resetForm();
  };

  return (
    <div className="container mt-4">
      <h2>Manage Books</h2>
      <BookForm
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
        onSubmit={editingBook ? handleUpdateBook : handleAddBook}
      />
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Books;
