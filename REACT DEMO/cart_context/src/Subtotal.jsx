import React from 'react'

function Subtotal() {
  return (
   <div className='container' >
    <div className='row' >
        <div className='col-lg-6' > 
            <div>subtotal</div>
            <div>qty</div>
        </div>
        <div className='col-lg-6  ' >
            <div className='d-flex justify-content-end'>price</div>
            <div className='d-flex justify-content-end'>quantity</div>
        </div>
    </div>
   </div>
  )
}

export default Subtotal