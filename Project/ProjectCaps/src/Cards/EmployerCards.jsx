import React from 'react'

function EmployerCards({ job }) {
  return (
    <div className="container">
      <div className='m-1'>
        <div className="card text-center">
          <div className="card-header">
            SONY
          </div>
          <div className="card-body d-flex">
            <div>
              <img src={job.companyImageLink} style={{ height: "300px", width: "300px", margin: "15px" }} />
            </div>
            <div>
              <h5 className="card-title"><h2>{job.companyName}</h2></h5>
              <h4>Job description</h4>
              <p className="card-text fw-bold">{job.jobRequirement}</p>
              <p><h4>Skills needed</h4>
                <div className='d-flex '>
                  <div className='column text-start'>
                    {/* Dynamically render skills */}
                    {job.skillsNeeded.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </div>
                </div>
              </p>
              <a href="#" className="btn btn-primary">Apply</a>
            </div>
          </div>
          <div className="card-footer text-body-secondary text-end ">
            <div className='d-flex'>
              <div className='column '>
                <div>Applicants</div>
              </div>
            </div>
            <div>Posted date:</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerCards