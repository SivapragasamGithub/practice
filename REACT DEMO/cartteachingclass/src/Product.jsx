function Product({product,addItem}) {
    return   <div class="card" style={{width:"12rem"}} >
    <img src="https://fastly.picsum.photos/id/237/200/200.jpg?hmac=zHUGikXUDyLCCmvyww1izLK3R3k8oRYBRiTizZEdyfI" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title" style={{textAlign:"center"}}> {product.name} </h5>
      <p class="card-text" style={{textAlign:"center"}}><h5>{product.price}</h5></p>
      <button onClick={()=>{
        addItem(product)
      }} class="btn btn-primary" >Add to Cart</button>
    </div>
  </div>

    
}   
export default Product