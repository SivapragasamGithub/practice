import React from 'react'
import Card from './Card'

function Cartpage() {
    const item = [
        {
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "    ",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        }
    ]
    return (
        <div className="container" style={{backgroundColor:"#f6f5f8"}}>
            <div className="row" >
                <div className="col-lg-8" >
                    <h1>Product</h1>
                    <div class="card mb-3 p-3" style={{ width: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" class="img-fluid rounded-start" alt="electronics" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <h5 class="card-title">{item.price}</h5>
                                    <p class="card-text">Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4" >
                    <h1>Cart</h1>
                    <div className='container ' >
                        <div className='row' >
                            <div className='col-lg-8 d-flex flex-row-reverse'>
                                <select id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className='col-lg-4 d-flex flex-row-reverse'>price</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartpage