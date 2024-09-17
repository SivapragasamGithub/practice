import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function UserCreate() {
    const navigate = useNavigate()
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                age: 0
            },
            validate: (values) => {
                let error = {}
                if (values.name == "") {
                    error.name = "plaease enter name"
                }
                if (values.age < 18) {
                    error.age == "please enter age greater 18"
                }
                return error
            },
            onSubmit: async (values) => {
                try {
                    console.log(values);
                    await axios.post("http://localhost:3000/user", values)
                    navigate("/")
                } catch (error) {
                    console.log(error);
                }
            }
        }
    )
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <h1>Create User</h1>
                <div className="col-lg-6">
                    <label htmlFor="">Name</label>
                    <input name='name' value={formik.values.name} onChange={formik.handleChange} type="text" className="form-control" />
                    <span>{formik.errors.name}</span>
                </div>
                <div className="col-lg-6">
                    <label htmlFor="">Age</label>
                    <input name='age' value={formik.values.age} onChange={formik.handleChange} type="number" className="form-control" />
                    <span>{formik.errors.age}</span>

                </div>
                <div className="col-lg-6 mt-2">
                    <input type="submit" value="submit" className="btn btn-primary" />

                </div>
            </div>
            </form>
        </div>
    )
}

export default UserCreate