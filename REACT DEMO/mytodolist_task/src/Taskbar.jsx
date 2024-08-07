import React from 'react'

function Taskbar() {
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-lg-5 ' style={{ marginTop: "50px", display: "flex" }}>
                    <h3> My todo</h3>
                </div>
                <div className='col-lg-5' style={{ marginTop: "50px", display: "flex", justifyContent: "end" }}> <h3>Status Filter</h3></div>
                <div className='col-lg-2' style={{ marginTop: "50px", display: "flex", justifyContent: "end" }}>
                    <div class="dropdown">
                        <button class="btn  dropdown-toggle" style={{backgroundColor:"#ff7f7d"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taskbar