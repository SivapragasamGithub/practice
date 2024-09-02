import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
function Books() {
    return (
        <div className='container'>
            
            <div class="card" style={{ width: "18rem", margin: "5px", padding: "5px" }}>
                        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" class="card-img-top" alt="..." style={{ width: "250px", height: "250px" }} />
                        <div class="card-body">
                            <h5 class="card-title">title</h5>
                            <p class="card-text">Author</p>
                            <p class="card-text">ISBN Number</p>
                            <p class="card-text">Publication date</p>
                            <button className='btn btn-primary mb-3 m-1'>Edit</button>
                            <button className='btn btn-primary mb-3 m-1'>Delete</button>
                        </div>
                    </div>
        </div>
    )
}

export default Books