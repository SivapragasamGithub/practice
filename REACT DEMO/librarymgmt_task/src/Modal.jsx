import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Modal() {
    const Navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            ISBNNumber: "",
            PublicationDate: ""
        },
        validate: (values) => {
            let error = {};
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
        onSubmit: (values) => {
            console.log(values);

        }

    })

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { Navigate(-1) }}></button>
                        </div>
                        <div className="modal-body">
                            <div className='col-lg-12'>
                                <label htmlFor="">Title</label>
                                <input type="text"
                                    name='title'
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    className={`form-control`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">Author</label>
                                <input type="text"
                                    name='author'
                                    value={formik.values.author}
                                    onChange={formik.handleChange}
                                    className={`form-control`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">ISBN Number</label>
                                <input type="text"
                                    name='ISBNNumber'
                                    value={formik.values.ISBNNumber}
                                    onChange={formik.handleChange}
                                    className={`form-control`}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <label htmlFor="">Publication Date</label>
                                <input type="text"
                                    name='PublicationDate'
                                    value={formik.values.PublicationDate}
                                    onChange={formik.handleChange}
                                    className={`form-control`}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { Navigate(-1) }}>Close</button>
                            <input type="submit" className="btn btn-primary" value={"save changes"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal