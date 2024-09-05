import React, { useContext } from 'react'
import "./Product.css"
import { cartContext } from '../App';

function Product({product}) {

    const {cart,setcart} = useContext(cartContext)
    const name = product.name.length > 21 ? product.name.substring(0,20) + "..":product.name;

    const addCart =()=>{
        setcart([...cart,product])
    }
    const removeCart =()=>{
        setcart(cart.filter((c)=>c.id !== product.id))
    }
  return (
    <div className='product container'>
        <div className="row">
            <div className="col-lg-12">
            <div className="img">
<img src={product.pic} alt={product.name} />
        </div>
        <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs:{product.price}</p>
       {
        cart.includes(product)? <button className='btn btn-danger !important' onClick={removeCart}>remove from cart</button> :  <button onClick={addCart} className='btn btn-primary'>Add to cart</button>
       }
        </div>
                </div></div></div>
   
  )
}

export default Product