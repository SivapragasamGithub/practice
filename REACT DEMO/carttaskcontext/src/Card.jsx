import React from 'react';

function Card({ product, onAddToCart }) {
    const name = product.title.length > 21 ? product.title.substring(0, 10) : product.title;
    const itemDetail = product.description.length > 21 ? product.description.substring(0, 50) + "....." : product.description;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
            <div className="card h-100 d-flex flex-column p-3 rounded-3">
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text flex-grow-1">{itemDetail}</p>
                    <h6 className="card-title">{product.category}</h6>
                    <img src={product.image} className="card-img-top mb-3 rounded-3" alt="product" style={{ height: "230px", width: "230px" }} />
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
