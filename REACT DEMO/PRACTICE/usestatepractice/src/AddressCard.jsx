import React from 'react'
import { Link } from 'react-router-dom'

function AddressCard({ user, handleclickDelete }) {
    return (
        <div>
            <p>Name:{user.name}</p>
            <p>UserName:{user.username}</p>
            <p>Email:{user.email}</p>
            <h5>Address</h5>
            <p>street:{user.address.street}</p>
            <p>suite:{user.address.suite}</p>
            <p>city:{user.address.city}</p>
            <p>zipcode:{user.address.zipcode}</p>
            <h6>geo:</h6>
            <p>lng:{user.address.geo.lng}</p>
            <p>lat:{user.address.geo.lat}</p>
            <p>phone:{user.phone}</p>
            <p>website:{user.website}</p>
            <strong><h5>company</h5></strong>
            <p>Name:{user.company.Cname}</p>
            <p>CatchPhrase:{user.company.catchPhrase}</p>
            <p>Bs:{user.company.bs}</p>
            <Link className='btn btn-primary m-3' to={`/form/${user.id}`} >Edit</Link>
            <button className='btn btn-danger m-3' onClick={() => { handleclickDelete(user.id) }}>delete</button>
            <hr />
        </div>
    )
}
export default AddressCard