import { useFormik } from 'formik'
import React, { useContext } from 'react'
import UserContext from './UserContext';

function Contact() {
    const userData = useContext(UserContext)
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            message:"",
        },
        onSubmit: (values) => {
            console.log(values);
            userData.setUsername(values.name)
        },
        
    });
  return (
    <div className='container' >
        <h1>Contact</h1>
        <form onSubmit={formik.handleSubmit}>            
            <div className='mb-3' >
                <label  className='form-label'>Name</label>
                <input 
                name='name' 
                onChange={formik.handleChange} 
                value={formik.values.name} 
                type="text" className='form-control' id='name' />
            </div>
            <div className='mb-3' >
                <label  className='form-label'>Email</label>
                <input
                name='email' 
                onChange={formik.handleChange} 
                value={formik.values.email} type="email" className='form-control' id='email' />
            </div>
            <div className='mb-3' >
                <label  className='form-label'>Message</label>
                <textarea
                name='message' 
                onChange={formik.handleChange} 
                value={formik.values.message} rows="3" className='form-control' id='message' />
            </div>
            <button type='submit' className='btn btn-primary' >Submit</button>
        </form>
    </div>
  )
}

export default Contact