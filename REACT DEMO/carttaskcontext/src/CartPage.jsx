import React from 'react';
import { useCart } from './CartContext';

function CartPage() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalItems, totalPrice } = useCart();

    return (
        <div className='container'>
            <div className='row' >
                <div className='col-lg-8 flex-start' >
                    <h1>Your Cart</h1>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>) : (

                        <div>
                            {

                                cart.map(item => (
                                    <div key={item.id} className="d-flex justify-content-between align-items-center" >
                                        <div>

                                            <p class="text-break">{item.title}</p>
                                            <div>
                                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>${item.price * item.quantity}</h4>
                                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))
                            }
                            <br />
                            <br />
                            <br />

                        </div>
                    )}
                </div>
                <div className='col-lg-4 flex-end' >
                    <h4>Total QTY: {totalItems}</h4>
                    <h4>Total: ${totalPrice}</h4>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
