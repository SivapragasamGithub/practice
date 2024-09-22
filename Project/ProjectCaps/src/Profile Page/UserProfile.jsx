import React from 'react'

function UserProfile() {
  return (
    <div className="container">
      <div class="card mb-3" style={{ maxWidth: "auto", height: "90vh" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p>Name:</p>
              <p>Email:</p>
              <p>Phone Number:</p>
              <p>Description</p>
              <p>Experience</p>
              <p>Skills</p>
              <p>Role</p>
              <p>Projects</p>
              <li>ProjectName:</li>
              <li>ProjectDescription:</li>
              <li>ProjectLink</li>
            </div>
            <button className='btn btn-primary m-1'>edit</button>
            <button className='btn btn-primary m-1'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile