import React from 'react'
import Card from './Card'

function Cartpage() {
    return (
        <div className='container' >
            <div className='row' >
                <div class="card-body">
                    <h4 class="card-title">{product.title}</h4>
                    <h5 class="card-price">{product.price}</h5>
                    <div>
                        <p class="card-text">{product.description}</p>
                        <h6 class="card-title">{product.category}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartpage