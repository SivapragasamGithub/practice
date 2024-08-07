import React from 'react'

function Carddisp(props) {
    return (
        <div className='container' >
            <div className='row' >
                <div className='col-lg-4' >
                    <div className="card" style={{ width: "20rem", padding: "8px" }}>
                        <div className="card-body" style={{backgroundColor:"#ccf5d3"}}>
                            <h6 className="card-title">Name:{props.name}</h6>
                            <h6 className="card-text">Description:This is the description for my {props.description} week</h6>

                            <div className='row'>   
                                <div className='col-lg-3' >
                                    <h6 className="card-title" style={{ textAlign: "start"}} >Status</h6>
                                </div>
                                <div className='col-lg-9' style={{ textAlign: "start", display:"flex" ,justifyItems:"flex-start" }} >

                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Not Completed
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><button className="dropdown-item" style={{backgroundColor:"#15ac8a"}} type="button">Completed</button></li>
                                            <li><button className="dropdown-item" style={{backgroundColor:"#ff7f7d"}} type="button">Not completed</button></li>

                                        </ul>
                                    </div>
                                </div>
                            </div><br />
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
                        <button className="btn me-md-2" style={{backgroundColor:"#17ac8c"}} type="button">Edit</button>
                        <button className="btn btn-primary" style={{backgroundColor:"#cf5e20"}} type="button">Delete</button>

                    </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Carddisp