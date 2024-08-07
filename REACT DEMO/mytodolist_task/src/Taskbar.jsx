import React from 'react'

function Taskbar() {
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-lg-5 ' style={{ marginTop: "50px", display: "flex" }}>
                    <h3> My todo</h3>
                </div>
                <div className='col-lg-5' style={{ marginTop: "50px", display: "flex", justifyContent: "end" }}> <h3>Status Filter</h3></div>
                <div className='col-lg-2' style={{ marginTop: "50px", display: "flex", justifyContent:"flex-start" }}>
                    <div class="dropdown">
                        <button class="btn  dropdown-toggle" style={{backgroundColor:"#ff7f7d"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
All                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item">All</button></li>
                            <li><button class="dropdown-item" >completed</button></li>
                            <li><button class="dropdown-item" >Not completed</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taskbar