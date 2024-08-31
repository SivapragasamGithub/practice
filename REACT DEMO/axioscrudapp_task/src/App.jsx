// src/App.jsx
import React from 'react';
import UserList from './UserList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Axios CRUD</h1>
        <UserList />
      </header>
    </div>
  );
};

export default App;
