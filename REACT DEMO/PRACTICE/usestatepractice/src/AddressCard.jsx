import React from 'react'

function AddressCard({ address,handleDelete }) {
   
    return (
        <div>
            <p>Name:{address.name}</p>
            <p>UserName:{address.username}</p>
            <p>Email:{address.email}</p>
            <h5>Address</h5>
            <p>{address.address.street},{address.address.suite},{address.address.city}-zipcode:{address.address.zipcode}</p>
            <h6>geo: lat:{address.address.geo.lat},lng:{address.address.geo.lng}</h6>
            <p></p>
            <p></p>
            <p>phone:{address.phone}</p>
            <p>website:{address.website}</p>
            <strong><h5>company</h5></strong>
            <p><h6>Name:</h6>{address.company.name}</p>
            <p><h6>CatchPhrase:</h6>{address.company.catchPhrase}</p>
            <p><h6>Bs:</h6>{address.company.bs}</p>
            <button className='btn btn-primary m-3' >Edit</button>
            <button className='btn btn-danger m-3'onClick={(handleDelete)=>{address.id}}>delete</button>
            <hr />
        </div>)
}

export default AddressCard