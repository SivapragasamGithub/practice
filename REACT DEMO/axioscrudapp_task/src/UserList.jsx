import React, { useState, useEffect } from 'react';
import UserService from './UserService';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [editingUserId, setEditingUserId] = useState([]);
    const [editedUser, setEditedUser] = useState({ name: '', email: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        UserService.getUsers()
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    };

    const handleAddChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleAddUser = () => {
        UserService.addUser(newUser)
            .then(() => {
                fetchUsers(); // Refresh the user list after adding
                setNewUser({ name: '', email: '' }); // Reset the form
            })
            .catch((error) => {
                console.error('Error adding user:', error);
            });
    };

    const handleEditClick = (user) => {
        setEditingUserId(user.id);
        setEditedUser({ name: user.name, email: user.email });
    };

    const handleEditChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleEditSave = (id) => {
        UserService.updateUser(id, editedUser)
            .then(() => {
                fetchUsers(); // Refresh the user list after saving
                setEditingUserId(null);
            })
            .catch((error) => {
                console.error('Error updating user:', error);
            });
    };

    const handleDeleteClick = (id) => {
        UserService.deleteUser(id)
            .then(() => {
                fetchUsers(); // Refresh the user list after deleting
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };

    return (
        <div>
            <h2>User List</h2>

            {/* Add User Form */}
            <div>
                <h3>Add User</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleAddChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleAddChange}
                />
                <button onClick={handleAddUser}>Add</button>
            </div>

            {/* User List */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {editingUserId === user.id ? (
                            <>
                                <input
                                    type="text"
                                    name="name"
                                    value={editedUser.name}
                                    onChange={handleEditChange}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    value={editedUser.email}
                                    onChange={handleEditChange}
                                />
                                <button onClick={() => handleEditSave(user.id)}>Save</button>
                                <button onClick={() => setEditingUserId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {user.name} - {user.email}
                                <button className='button' onClick={() => handleEditClick(user)}>Edit</button>
                                <button className='button' onClick={() => handleDeleteClick(user.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
