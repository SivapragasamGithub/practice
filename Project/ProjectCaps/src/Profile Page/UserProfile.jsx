import React, { useContext, useEffect, useState } from 'react'
import userContext from '../UserContext'
import { Link } from 'react-router-dom'
import axios from 'axios';

function UserProfile() {
  const { candidat, setCandidate } = useContext(userContext)

  return (
    <div className="container">
      {
        candidat.map((user, index) =>
          // console.log(user.projects.map(project => console.log(project.projectName))
          // )
          <div key={index} className="container m-3">
            <div className="card mb-3" style={{ maxWidth: "auto", height: "90vh" }}>
              <div className="row g-1">
                <div className='row-md-4 d-flex justify-content-center md-3 m-3'>
                  <Link className='btn btn-primary d-flex justify-content-center' to={'/usermodal'} >create</Link>
                </div>
                <div className="col-md-4 mt-8">
                  <img src="https://static.vecteezy.com/system/resources/previews/003/241/796/non_2x/search-employee-and-candidate-vector.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>Name: {user.name} </p>
                    <p>Email: {user.email} </p>
                    <p>Phone Number: {user.PhoneNumber} </p>
                    <p>Description: {user.description} </p>
                    <p>Experience: {user.experience} </p>
                    <p>Skills: {user.skills} </p>
                    <p>Role: {user.role} </p>

                    {/* {
                      user.projects.map(project =>
                      // console.log(project.projectName)

                      {
                        return (
                          <>
                            <p>Projects:</p>
                            <li>ProjectName: {project.projectName}</li>
                            <li>ProjectDescription:{project.projectDescription} </li>
                            <li>ProjectLink:{project.projectLink} </li><br />
                          </>
                        )
                      }
                      )
                    } */}



                  </div>
                  <button className='btn btn-primary m-1'>edit</button>
                  <button className='btn btn-primary m-1'>Save</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>


  )
}

export default UserProfile