import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Form() {
    const navigation = useNavigate()
    const { id } = useParams()
    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: ""
                },
            },
            phone: "",
            website: "",
            company: {
                Cname: "",
                catchPhrase: "",
                bs: ""
            },
        },
        validate: (values) => {
            let error = {};
            if (values.name === "") {
                error.name = "please enter name"
            }
            if (values.username === "") {
                error.username = "please enter username"
            }
            if (values.email === "") {
                error.email = "please enter email"
            }
            if (values.address.street === "") {
                error.address.street = "please enter street"
            }
            if (values.address.suite === "") {
                error.address.suite = "please enter suite"
            }
            if (values.address.city === "") {
                error.address.city = "please enter city"
            }
            if (values.address.zipcode === "") {
                error.address.zipcode = "please enter zipcode"
            }
            if (values.address.geo.lat === "") {
                error.address.geo.lat = "please enter address.geo.lat"
            }
            if (values.address.geo.lng === "") {
                error.address.geo.lng = "please enter address.geo.lng"
            }
            if (values.phone === "") {
                error.phone = "please enter phone"
            }
            if (values.website === "") {
                error.website = "please enter website"
            }
            if (values.company.Cname === "") {
                error.company.Cname = "please enter company.name"
            }
            if (values.company.catchPhrase === "") {
                error.company.catchPhrase = "please enter company.catchPhrase"
            }
            if (values.company.bs === "") {
                error.company.bs = "please enter company.bs"
            }
            return error
        },
        onSubmit: async (values) => {
            try {
                if (id) {
                    const resp = await axios.put(`https://66d5f031f5859a704267edf6.mockapi.io/address/${id}`, values)
                    console.log(resp);
                } else {
                    await axios.post("https://66d5f031f5859a704267edf6.mockapi.io/address", values)
                }
                navigation(-1)
            } catch (error) {
                alert("something went wrong")
            }
        }
    })

    const fetchData = async () => {
        if (id) {
            try {
                const response = await axios.get(`https://66d5f031f5859a704267edf6.mockapi.io/address/${id}`)
                formik.setValues(response.data)
                console.log(response.data);
            } catch (error) {
                alert("Failed something went wrong")
            }
        }

    }

    useEffect(() => {
        fetchData()
    }, [id])

    const Data = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ]

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='col-lg-7'>
                        <h2>Form</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange} className={`form-control ${formik.errors.name && 'is-invalid'}`} />
                                    <span style={{ color: 'red' }}>{formik.errors.name}</span>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-5 m-1'>
                                        <div className='row'>
                                            <label htmlFor="">username</label>
                                            <input type="text" name='username' value={formik.values.username} onChange={formik.handleChange} className='form-control' />
                                        </div>
                                    </div>
                                    <div className='col-lg-5 m-1'>
                                        <div className='row'>
                                            <label htmlFor="">email</label>
                                            <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} className='form-control' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor=""><h4>address</h4></label>
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor="">street</label>
                                    <input type="text" name='address.street' value={formik.values.address.street} onChange={formik.handleChange} className='form-control' />
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-3 m-1'>
                                        <div className='row'>
                                            <label htmlFor="">suite</label>
                                            <input type="suite" name='address.suite' value={formik.values.address.suite} onChange={formik.handleChange} className='form-control' />
                                        </div>
                                    </div>
                                    <div className='col-lg-3 m-1'>
                                        <div className='row'>
                                            <label htmlFor="">city</label>
                                            <input type="text" name='address.city' value={formik.values.address.city} onChange={formik.handleChange} className='form-control' />
                                        </div>
                                    </div>
                                    <div className='col-lg-3 m-1'>
                                        <div className='row'>
                                            <label htmlFor="">zipcode</label>
                                            <input type="text" name='address.zipcode' value={formik.values.address.zipcode} onChange={formik.handleChange} className='form-control' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='row'>
                                        <label htmlFor=""><h4>Geo</h4></label>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='row'>
                                            <label htmlFor="">lat</label>
                                            <input type="text" name='address.geo.lat' value={formik.values.address.geo.lat} onChange={formik.handleChange} className='form-control' />
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='row'>
                                            <label htmlFor="">lng</label>
                                            <input type="text" name='address.geo.lng' value={formik.values.address.geo.lng} onChange={formik.handleChange} className='form-control' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor="">phone</label>
                                    <input type="text" name='phone' value={formik.values.phone} onChange={formik.handleChange} className='form-control' />
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor="">website</label>
                                    <input type="text" name='website' value={formik.values.website} onChange={formik.handleChange} className='form-control' />
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor=""><h4>company</h4></label>
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor="">name</label>
                                    <input type="text" name='company.Cname' value={formik.values.company.Cname} onChange={formik.handleChange} className='form-control' />
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor="">catchPhrase</label>
                                    <input type="text" name='company.catchPhrase' value={formik.values.company.catchPhrase} onChange={formik.handleChange} className='form-control' />
                                </div>
                            </div>
                            <div className='col-lg-10'>
                                <div className='row'>
                                    <label htmlFor="">bs</label>
                                    <input type="text" name='company.bs' value={formik.values.company.bs} onChange={formik.handleChange} className='form-control' />
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary m-3'>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form