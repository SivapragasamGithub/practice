import React, { useContext, useEffect, useState } from 'react'
import employersContext from '../EmployersContext';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function EmployerProfile() {

  const { employer } = useContext(employersContext);
  const { id } = useParams();
  const [employerDetail, setemployerDetail] = useState([]);

  const fetchEmployer = async () => {
    try {
      console.log("the id before checking id:", id);
      if (id) {
        console.log("Fetching employer with ID:", id);
        const response = await axios.get(`http://localhost:3000/employer/${id}`);
        setemployerDetail(response.data);
        console.log("Response from employer profile get after API req:", response.data);

      }
    } catch (error) {
      console.error("Error fetching employer data", error);
    }
  };

  useEffect(() => {
    fetchEmployer();
  }, [id]);

  const displayedemployers = employer?.filter(employer => employer._id === id);

  return (
    <div className="container" >
      {
        id && displayedemployers ? displayedemployers.map((employer) => (
          <div key={employer._id} className="container m-3">
            <div className="card mb-3" style={{ maxWidth: "auto", height: "90vh" }}>
              <div className="row g-1">
                <div className='row-md-4 d-flex justify-content-center md-3 m-3'>
                  <Link className='btn btn-primary d-flex justify-content-center' to={'/employermodal'}>Create</Link>
                </div>
                <div className="col-md-4 mt-8">
                  <img src={employer.photo} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p>company: {employer.company}</p>
                    <p>HRname: {employer.HRname}</p>
                    <p>Email: {employer.email}</p>
                    <p>Phone Number: {employer.PhoneNumber}</p>
                    <p>jobdescription: {employer.jobdescription}</p>
                    <p>experiencerequired: {employer.experiencerequired}</p>
                    <p>skillsneeded: {employer.skillsneeded}</p>
                    <p>Role: {employer.role}</p>
                    {/* <div className='d-flex'>
                      <div className='column text-start'>
                        {employer.projects && employer.projects.length > 0 ? (
                          employer.projects.map((project, index) => (
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
                    </div> */}
                  </div>
                  <Link className='btn btn-primary m-1' to={`/employermodal/${employer._id}`}>Edit</Link>
                  <button className='btn btn-primary m-1'>Save</button>
                </div>
              </div>
            </div>
          </div>
        )
          // If an ID is provided and a employer is found, show only that employer

        ) : (
          // If no ID or no employer found, display all users
          employer.map((employer) => (
            <div key={employer._id} className="container m-3">
              <div className="card mb-3" style={{ maxWidth: "auto", height: "90vh" }}>
                <div className="row g-1">
                  <div className='row-md-4 d-flex justify-content-center md-3 m-3'>
                    <Link className='btn btn-primary d-flex justify-content-center' to={'/employermodal'}>Create</Link>
                  </div>
                  <div className="col-md-4 mt-8">
                    <img src={employer.photo} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p>company: {employer.company}</p>
                      <p>HRname: {employer.HRname}</p>
                      <p>Email: {employer.email}</p>
                      <p>Phone Number: {employer.PhoneNumber}</p>
                      <p>jobdescription: {employer.jobdescription}</p>
                      <p>experiencerequired: {employer.experiencerequired}</p>
                      <p>skillsneeded: {employer.skillsneeded}</p>
                      <p>Role: {employer.role}</p>
                    </div>
                    {/* <Link className='btn btn-primary m-1' to={`/usermodal/${employer._id}`}>Edit</Link> */}
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

export default EmployerProfile