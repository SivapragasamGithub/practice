import React from 'react';

function Card({ product, onAddToCart }) {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
            <div className="card h-100 d-flex flex-column p-3 rounded-3">
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <h6 className="card-title">{product.category}</h6>
                    <img src={product.image} className="card-img-top mb-3" alt="product" />
                    <div className="mt-auto">
                        <h6 className="card-title">${product.price}</h6>
                        <button className="btn btn-primary w-100" onClick={onAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
