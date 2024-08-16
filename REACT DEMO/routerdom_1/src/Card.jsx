import React from 'react'

function Card(course) {
    return (
        <div className='col-lg-4 g-3  ' >
            <div class="card h-100" style={{ width: "auto",height:"500px",padding:"15px",margin:"5px"}} >
                <img src={course.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{course.name}</h5>
                    <p class="card-text" style={{ marginBottom: "2px" }}>available in</p>
                    <span class="badge rounded-pill text-bg-secondary">{course.language1}</span>
                    <span class="badge rounded-pill text-bg-secondary">{course.language2}</span><br />
                    <br />
                    <button class="btn btn-primary" style={{ margintop:"25px"}} >Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Card