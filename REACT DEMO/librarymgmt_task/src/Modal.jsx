import axios from 'axios'
import { useFormik } from 'formik'
import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Modal({ bookToEdit }) {
    const Navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            image: bookToEdit?.image || "",
            title: bookToEdit?.title || "",
            author: bookToEdit?.author || "",
            ISBNNumber: bookToEdit?.ISBNNumber || "",
            PublicationDate: bookToEdit?.PublicationDate || ""
        },
        enableReinitialize:true,
        validate: (values) => {
            let error = {};
            if (values.image == "") {
                error.image = "pls enter title"
            }
            if (values.title == "") {
                error.title = "pls enter title"
            }
            if (values.author == "") {
                error.author = "pls enter title"
            }
            if (values.ISBNNumber == "") {
                error.ISBNNumber = "pls enter title"
            }
            if (values.PublicationDate == "") {
                error.PublicationDate = "pls enter title"
            }
            return error
        },
        onSubmit: async (values) => {
            if (bookToEdit) {
                await axios.put(`https://66bf9c5d42533c403146a60d.mockapi.io/user/${bookToEdit.id}`, values);
            } else {
                await axios.post("https://66bf9c5d42533c403146a60d.mockapi.io/user", values);
            }
            Navigate(-1);
        }
    });

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">{bookToEdit ? "Edit Book" : "Create Book"}</h5>
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
                                <label htmlFor="">Title</label>
                                <input type="text"
                                    name='title'
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.title && 'is-invalid'}`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">Author</label>
                                <input type="text"
                                    name='author'
                                    value={formik.values.author}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.author && 'is-invalid'}`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">ISBN Number</label>
                                <input type="text"
                                    name='ISBNNumber'
                                    value={formik.values.ISBNNumber}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.ISBNNumber && 'is-invalid'}`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">Publication Date</label>
                                <input type="text"
                                    name='PublicationDate'
                                    value={formik.values.PublicationDate}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.PublicationDate && 'is-invalid'}`}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { Navigate(-1) }}>Close</button>
                            <input type="submit" className="btn btn-primary" value={bookToEdit ? "Save Changes" : "Create Book"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
