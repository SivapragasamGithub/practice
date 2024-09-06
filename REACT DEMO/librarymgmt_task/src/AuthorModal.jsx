import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { bookcontext } from './App'

function AuthorModal() {
    const { id } = useParams()
    const Navigate = useNavigate()
    const { authorToEdit, setAuthorToEdit } = useContext(bookcontext)
    const formik = useFormik({
        initialValues: {
            image: authorToEdit?.image || "",
            name: authorToEdit?.name || "",
            birthdate: authorToEdit?.birthdate || "",
            bio: authorToEdit?.bio || "",
        },

        validate: (values) => {
            let error = {};
            if (values.image == "") {
                error.image = "pls enter title"
            }
            if (values.name == "") {
                error.title = "pls enter title"
            }
            if (values.birthdate == "") {
                error.author = "pls enter title"
            }
            if (values.bio == "") {
                error.ISBNNumber = "pls enter title"
            }

            return error
        },
        onSubmit: async (values) => {
            try {
                if (id) { 
                    await axios.put(`https://66d5f031f5859a704267edf6.mockapi.io/author/${id}`, values); 
                } else {
                    await axios.post("https://66d5f031f5859a704267edf6.mockapi.io/author", values);
                }
                Navigate(-1);
            } catch (error) {
                alert("something wrong")
            }
        }
    });

    const fetchauthorData = async () => {
        if (id) {
            try {
                const response = await axios.get(`https://66d5f031f5859a704267edf6.mockapi.io/author/${id}`)  
                formik.setValues(response.data)
                console.log(response.data);
            } catch (error) {
                alert("Failed to fetch character data")
            }
        }
    }
    useEffect(() => {
        fetchauthorData()
    }, [id])

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">{authorToEdit ? "Edit author" : "Create author"}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { Navigate(-1) }}></button>
                        </div>
                        <div className="modal-body">
                            <div className='col-lg-12'>
                                <label htmlFor="">Image</label>
                                <input type="text"
                                    name='image'
                                    value={formik.values.image}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.image && 'is-invalid'}`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">name</label>
                                <input type="text"
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.name && 'is-invalid'}`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">birthdate</label>
                                <input type="text"
                                    name='birthdate'
                                    value={formik.values.birthdate}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.birthdate && 'is-invalid'}`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">bio</label>
                                <input type="text"
                                    name='bio'
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.bio && 'is-invalid'}`}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { Navigate(-1) }}>Close</button>
                            <input type="submit" className="btn btn-primary" value={authorToEdit ? "Save Changes" : "Create Book"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthorModal