import React from 'react'

function Card() {
    return (
        <div className='col-lg-4' >
            <div class="card" style={{ width: " 27rem" }}>
                <img src="https://static.guvi.in/blog/zenThumbnail/java-fsd.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Java Full Stack Development Course</h5>
                    <p class="card-text" style={{ marginBottom: "2px" }}>available in</p>
                    <span class="badge rounded-pill text-bg-secondary">Tamil</span>
                    <span class="badge rounded-pill text-bg-secondary">English</span><br />
                    <br />
                    <button href="#" class="btn btn-primary">Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Card