import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Modal() {
    const navigation = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            clan: "",
            description: ""
        },
        validate: (values) => {
            let error = {};
            if (values.name == "") {
                error.name = "please enter name"
            }
            if (values.image == "") {
                error.image = "please enter image"
            }
            if (values.clan == "") {
                error.clan = "please enter clan"
            }
            if (values.description == "") {
                error.description = "please enter description"
            }


            return error
        },
        onSubmit: async (values) => {
            try {
                await axios.post("https://66bf9c5d42533c403146a60d.mockapi.io/got", values)
                navigation(-1)
            } catch (error) {
                alert("something went wrong")
            }
        }
    })
    return (
        <div class="modal" style={{ display: "block" }}>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                        </div>
                        <div class="modal-body">
                            <div className='col-lg-12' >
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.name && "is-invalid"}`} />
                            </div>
                            <div className='col-lg-12' >
                                <label htmlFor="">Image</label>
                                <input type="text" name="image"
                                    value={formik.values.image}
                                    onChange={formik.handleChange} className={`form-control ${formik.errors.image && "is-invalid"}`} />
                            </div>
                            <div className='col-lg-12' >
                                <label htmlFor="">Clan</label>
                                <input type="text"
                                    name="clan"
                                    value={formik.values.clan}
                                    onChange={formik.handleChange} className={`form-control ${formik.errors.clan && "is-invalid"}`} />
                            </div>
                            <div className='col-lg-12' >
                                <label htmlFor="">Description</label>
                                <textarea
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange} className={`form-control ${formik.errors.description && "is-invalid"}`} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="submit" class="btn btn-primary" value={"save changes"} />
                            <button type="button" class="btn btn-secondary" onClick={() => navigation(-1)} data-bs-dismiss="modal">Close</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal