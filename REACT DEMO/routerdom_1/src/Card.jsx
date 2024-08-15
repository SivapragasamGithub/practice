import React from 'react'

function Card(course) {
    return (
        <div className='col-lg-4' >
            <div class="card" style={{ width: " 27rem" }}>
                <img src="https://static.guvi.in/blog/zenThumbnail/java-fsd.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{course.name}</h5>
                    <p class="card-text" style={{ marginBottom: "2px" }}>available in</p>
                    <span class="badge rounded-pill text-bg-secondary">{course.language1}</span>
                    <span class="badge rounded-pill text-bg-secondary">{course.language2}</span><br />
                    <br />
                    <button href="#" class="btn btn-primary">Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Card