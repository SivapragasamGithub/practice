import React, { useContext, useEffect, useState } from 'react';
import userContext from '../UserContext';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
  const { candidat } = useContext(userContext);
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState([]);

  const fetchUser = async () => {
    try {
      if (id) {
        console.log("Fetching user with ID:", id);
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        setUserDetail(response.data);
        console.log("Response from user profile get after API req:", response.data);

      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };
  // console.log(id);

  useEffect(() => {
    fetchUser();
  }, [id]);

  // Determine the displayed user(s)
  const displayedUsers = candidat?.filter(user => user._id === id);
  // console.log(displayedUsers);
  const handleEdit = async () => {

  }

  return (
    <div className="container" >
      {
        id && displayedUsers ? displayedUsers.map((user) => (
          <div key={user._id} className="container m-3">
            <div className="card mb-3" style={{ maxWidth: "auto", height: "90vh" }}>
              <div className="row g-1">
                <div className='row-md-4 d-flex justify-content-center md-3 m-3'>
                  <Link className='btn btn-primary d-flex justify-content-center' to={'/usermodal'}>Create</Link>
                </div>
                <div className="col-md-4 mt-8">
                  <img src={user.photo} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.PhoneNumber}</p>
                    <p>Description: {user.description}</p>
                    <p>Experience: {user.experience}</p>
                    <p>Skills: {user.skills}</p>
                    <p>Role: {user.role}</p>
                    <div className='d-flex'>
                      <div className='column text-start'>
                        {user.projects && user.projects.length > 0 ? (
                          user.projects.map((project, index) => (
                            <div key={index}>
                              <p>projectName:  {project.projectName}</p>
                              <p>projectDescription:  {project.projectDescription}</p>
                              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Project Link</a>
                            </div>
                          ))
                        ) : (
                          <p>No projects available</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <Link className='btn btn-primary m-1' to={`/usermodal/${user._id}`}>Edit</Link>
                  <button className='btn btn-primary m-1'>Save</button>
                </div>
              </div>
            </div>
          </div>
        )
          // If an ID is provided and a user is found, show only that user

        ) : (
          // If no ID or no user found, display all users
          candidat.map((user) => (
            <div key={user._id} className="container m-3">
              <div className="card mb-3" style={{ maxWidth: "auto", height: "90vh" }}>
                <div className="row g-1">
                  <div className='row-md-4 d-flex justify-content-center md-3 m-3'>
                    <Link className='btn btn-primary d-flex justify-content-center' to={'/usermodal'}>Create</Link>
                  </div>
                  <div className="col-md-4 mt-8">
                    <img src={user.photo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p>Name: {user.name}</p>
                      <p>Email: {user.email}</p>
                      <p>Phone Number: {user.PhoneNumber}</p>
                      <p>Description: {user.description}</p>
                      <p>Experience: {user.experience}</p>
                      <p>Skills: {user.skills}</p>
                      <p>Role: {user.role}</p>
                    </div>
                    <Link className='btn btn-primary m-1' to={`/usermodal/${user._id}`}>Edit</Link>
                    <button className='btn btn-primary m-1'>Save</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
    </div>
  );
}

export default UserProfile;
