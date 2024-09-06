import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Modal() {
    const navigation = useNavigate()
    const { id } = useParams()

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            clan: "",
            description: ""
        },
        validate: (values) => {
            let error = {}
            if (values.name === "") {
                error.name = "Please enter name"
            }
            if (values.image === "") {
                error.image = "Please enter image"
            }
            if (values.clan === "") {
                error.clan = "Please enter clan"
            }
            if (values.description === "") {
                error.description = "Please enter description"
            }
            return error
        },
        onSubmit: async (values) => {
            try {
                if (id) {
                    await axios.put(`https://66bf9c5d42533c403146a60d.mockapi.io/got/${id}`, values)  
                } else {
                    await axios.post("https://66bf9c5d42533c403146a60d.mockapi.io/got", values)  //to post the cahracters that we enter
                }
                navigation(-1)
            } catch (error) {
                alert("Something went wrong")
            }
        }
    })

    const fetchCharacterData = async () => {
        if (id) {
            try {
                const response = await axios.get(`https://66bf9c5d42533c403146a60d.mockapi.io/got/${id}`)
                formik.setValues(response.data)
                console.log(response.data);
            } catch (error) {
                alert("Failed to fetch character data")
            }
        }
    }



    useEffect(() => {
        fetchCharacterData()
    }, [id])

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">{id ? "Edit Character" : "Create Character"}</h5>
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-12">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.name && "is-invalid"}`}
                                />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formik.values.image}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.image && "is-invalid"}`}
                                />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="clan">Clan</label>
                                <input
                                    type="text"
                                    name="clan"
                                    value={formik.values.clan}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.clan && "is-invalid"}`}
                                />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    className={`form-control ${formik.errors.description && "is-invalid"}`}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="submit" className="btn btn-primary" value={id ? "Save Changes" : "Create"} />
                            <button type="button" className="btn btn-secondary" onClick={() => navigation(-1)} data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
