import React from 'react';
import { useCart } from './CartContext';

function CartPage() {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalItems, totalPrice } = useCart();

    return (
        <div className='container'>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
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
                    ))}
                    <h3>Total Items: {totalItems}</h3>
                    <h3>Total Price: ${totalPrice}</h3>
                </div>
            )}
        </div>
    );
}

export default CartPage;
