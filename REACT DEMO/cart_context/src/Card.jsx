import React from 'react'

function Card({product}) {
    return (
        // <div className='container' >
            <div className='col' >
                <div class="card p-3 rounded-3" style={{ width: "21rem",margin:"4px", height:"950px" }}>                    
                    <div class="card-body">
                        <h4 class="card-title">{product.title}</h4>
                        <h5 class="card-price">{product.price}</h5>
                        <div>
                        <p class="card-text">{product.description}</p>
                        <h6 class="card-title">{product.category}</h6>
                        </div>
                        <div>
                        <img src={product.image} class="card-img-top" alt="product" /> 
                        </div>                                               
                        <div>
                        <h6 class="card-title">{product.rating.rate}</h6>
                        <h6 class="card-title">{product.rating.count}</h6>
                        <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        // </div>
    )
}

export default Card