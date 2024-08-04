import React from 'react'

function Card({product,btn,inc}) {
    return (
        <div className='col'>
             <div className="card m-auto p-2 rounded-3 " style={{width: "12rem"}}>
            <img src="https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU" className="card-img-top" alt="camera" />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text"><h5>RS {product.price}</h5></p>
                <p className="card-description"><h6>{product.description}</h6></p>
                <button onClick={inc} className="btn btn-primary">{btn}</button>
            </div>
        </div>
        </div>
    )
}

export default Card