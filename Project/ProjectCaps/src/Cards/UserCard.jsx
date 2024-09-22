import React from 'react'

function UserCard({ user }) {
    return (
        <div className="container">
            <div className='m-1'>
                <div className="card text-center">
                    <div className="card-header">
                        {user.name}
                    </div>
                    <div className="card-body d-flex">
                        <div>
                            <img src={user.photo} alt="" style={{ height: "300px", width: "300px", margin: "15px" }} />
                        </div>
                        <div>
                            <h5 className="card-title">{user.role}</h5>
                            <p>{user.experience}</p>
                            <p className="card-text">{user.description}</p>
                            <p><h4>Skills</h4>
                                <div className='d-flex '>
                                    <div className='column text-start'>
                                        {/* Dynamically render skills */}
                                        {user.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </div>
                                </div>
                            </p>
                            <a href="#" className="btn btn-primary m-3">Hire</a>
                            <a href="#" className="btn btn-primary m-3">View</a>
                        </div>

                    </div>
                    <div className="card-footer text-body-secondary text-end ">
                        <div className='d-flex'>
                            <div className='column '>
                                <div>
                                    Ratings
                                </div>
                                <br />
                                <div>comments</div>
                            </div>
                        </div>
                        <div>2 days</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard