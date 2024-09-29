import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

function UserModal() {

    const Navigate = useNavigate()
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                PhoneNumber: "",
                experience: "",
                skills: "",
                role: "",
                description: "",
                photo: "",
                projects: {
                    projectName1: "",
                    projectDescription1: "",
                    projectLink1: "",
                }
            },
            validate: (values) => {
                let error = {}
                if (values.name == "") {
                    error.name = "please enter name"
                }
                return error
            },
            onSubmit: async (values) => {
                try {
                    await axios.get("", values)
                    Navigate(-1)
                } catch (error) {
                    alert("something went wrong")
                }
            }

        }
    )
    return (
        <div className="modal" style={{ display: "block", height: "99vh" }}>
            <div className="modal-dialog" role='document'>
                <div className="modal-content" >
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => Navigate(-1)}></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-12">
                                <label htmlFor="">Name</label>
                                <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">email</label>
                                <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">PhoneNumber</label>
                                <input type="number" name='PhoneNumber' value={formik.values.PhoneNumber} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">experience</label>
                                <input type="text" name='experience' value={formik.values.experience} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">skills</label>
                                <input type="text" name='skills' value={formik.values.skills} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">role</label>
                                <input type="text" name='role' value={formik.values.role} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">description</label>
                                <input type="text" name='description' value={formik.values.description} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">photo</label>
                                <input type="text" name='photo' value={formik.values.photo} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">projects</label>
                                {/* <input type="text" name='name'value={formik.values.experience} onChange={formik.handleChange} className='formcontrol' /> */}
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">projectName1</label>
                                <input type="text" name='projectName1' value={formik.values.projectName1} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">projectDescription1</label>
                                <input type="text" name='projectDescription1' value={formik.values.projectDescription1} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="">projectLink1</label>
                                <input type="text" name='projectLink1' value={formik.values.projectLink1} onChange={formik.handleChange} className='formcontrol' />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => Navigate(-1)}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserModal