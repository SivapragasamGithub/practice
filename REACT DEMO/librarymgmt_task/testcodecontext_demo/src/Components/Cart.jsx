import React, { useEffect, useState, useContext } from 'react'
import Product from './Product';
import { cartContext } from '../App';

function Cart() {
    const { cart, setcart } = useContext(cartContext)

    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
    }, [cart]);

    return (
        <>
            <div className='container'>
                <div className="col">
                    <h1>Cart Products</h1>
                    <div className='cart-container'>
                        {
                            cart.map((Product) => (
                                <div className="cart-product" key={Product.id}>
                                    <div className="img">
                                        <img src={Product.pic} alt="image" />
                                    </div>
                                    <div className="cart-product-details">
                                        <h3>{Product.name}</h3>
                                        <p>{Product.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <h1>Total Amount Rs:{total}</h1>
                </div>
            </div>
        </>
    )
}

export default Cart

