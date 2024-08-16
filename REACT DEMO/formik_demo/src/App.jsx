import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

function App() {
  const [geoState,setGeoState] = useState([])
  const [geoCity,setGeocity] = useState([])
  
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      country: "",
      state: "",
      city: "",
      description: ""
    },
    validate: (values) => {
      // If Validate function returns empty object. Then onSubmit will be called. Else onSubmit will not be called
      let error = {}

      if (values.userName == "" || values.userName.length <= 3 || values.userName.length >= 15) {
        error.userName = "Please enter a valid User Name"
      }

      if (values.email == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = "Please enter Email"
      }

      return error
    },
    onSubmit : async (values) => {
      try {
        const userData = await axios.post("https://66bf9c5d42533c403146a60d.mockapi.io/user",values)
      } catch (error) {
        console.log(error);
        
      }
    }
//     onSubmit: async (values) => {
//   try {
//     await axios.post("https://66bf9c5d42533c403146a60d.mockapi.io/user", values);
//     alert('Form submitted successfully');
//   } catch (error) {
//     if (error.code === "ERR_NETWORK") {
//       alert("Network error: Please check your internet connection or try again later.");
//     } else {
//       alert("An error occurred: " + error.message);
//     }
//     console.log(error);
//   }
// }
  })
  let geoData = {
    countries: [
      {
        name: "india",
        value: "IN"
      },
      {
        name: "america",
        value: "US"
      }
    ],
    states: [
      {
        name: "Tamil nadu",
        key: "TN",
        country: "IN"
      },
      {
        name: "kerala",
        key: "KL",
        country: "IN"
      },
      {
        name: "Alaska",
        key: "AL",
        country: "US"
      },
      {
        name: "Texas",
        key: "TX",
        country: "US"
      }
    ],
    cities: [
      {
        name: "chennai",
        key: "CH",
        state: "TN"
      },
      {
        name: "madurai",
        key: "MA",
        state: "TN"
      },
      {
        name: "kochi",
        key: "KC",
        state: "KL"
      },
      {
        name: "wayanad",
        key: "WY",
        state: "KL"
      },
      {
        name: "seward",
        key: "SE",
        state: "AL"
      },
      {
        name: "Haines",
        key: "HA",
        state: "AL"
      },
      {
        name: "houstan",
        key: "HO",
        state: "TX"
      },
      {
        name: "Dallas",
        key: "DA",
        state: "TX"
      }

    ]

  }
  useEffect(() => {
   let stateList = geoData.states.filter((state)=>{
return state.country == formik.values.country
   })
   setGeoState(stateList)
  }, [formik.values.country])

  useEffect(() => {
    let cityList = geoData.cities.filter((city)=>{
 return city.state == formik.values.state
    })
    setGeocity(cityList)
   }, [formik.values.state])
  return (
    <>
      <div className='container'>
        <div className='row'>
          <form onSubmit={formik.handleSubmit}>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-6'>
                  <label htmlFor="">Name *</label>
                  <input type="text" name='userName'
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    className={`form-control ${formik.errors.userName && 'is-invalid'}`} />
                  <span style={{ color: 'red' }}>{formik.errors.userName}</span>
                </div>
                <div className='col-lg-6'>
                  <label htmlFor="">Email *</label>
                  <input type="text"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={`form-control ${formik.errors.email && 'is-invalid'}`} />
                  <span style={{ color: 'red' }}>{formik.errors.email}</span>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-4'>
                  <label htmlFor="">Country</label>
                  <select id="" name='country' value={formik.values.country} onChange={formik.handleChange} className='form-control'>
                    <option value="IN">India</option>
                    <option value="US">America</option>
                  </select>
                </div>
                <div className='col-lg-4'>
                  <label htmlFor="">State</label>
                  <select
                    name='state'
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    id="" className='form-control'>
                    {/* <option value="TN">Tamil Nadu</option>
                    <option value="KL">Kerla</option> */}

                    {
                      geoState.map((state)=>{
                        return <option value={state.key}>{state.name}</option>
                      })
                    }
                  </select>
                </div>
                <div className='col-lg-4'>
                  <label htmlFor="">City</label>
                  <select
                    name='city'
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    id="" className='form-control'>
                    {/* <option value="CH">Chennai</option>
                    <option value="MA">Madurai</option> */}
                    {
                       geoCity.map((city)=>{
                        return<option value={city.key} >{city.name}</option>
                       })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-12'>
                  <label htmlFor="">Description</label>
                  <textarea
                    name='description'
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    id="" className='form-control'></textarea>
                </div>
              </div>
            </div>
            <div className='col-lg-12 mt-3'>
              <div className='row'>
                <div className='col-lg-12'>
                  <input type="submit" className='btn btn-primary' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

[{
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
}]