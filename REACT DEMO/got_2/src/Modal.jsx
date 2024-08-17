import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Modal() {
    const navigation = useNavigate()
    const formik = useFormik({
        initialValues:{
            name:"",
            image:"",
            clan:"",
            description:""
        }
    }) 
  return (
    <div class="modal" style={{display:"block"}}>
  <div class="modal-dialog"  role="document">
    <div class="modal-content">
      <form onSubmit={formik.handleSubmit}>
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">        
      <div className='col-lg-12' >
            <label htmlFor="">Name</label>
            <input type="text" className='form-control' />
        </div>
        <div className='col-lg-12' >
            <label htmlFor="">Image</label>
            <input type="text" className='form-control' />
        </div>
        <div className='col-lg-12' >
            <label htmlFor="">Clan</label>
            <input type="text" className='form-control' />
        </div>
        <div className='col-lg-12' >
            <label htmlFor="">Description</label>
            <textarea  className='form-control' />
        </div>        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={()=>navigation(-1)} data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Modal