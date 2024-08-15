import React from 'react'
import Fullstackdevelopment from './Fullstackdevelopment'
import Cybersecurity from './Cybersecurity'
import Datascience from './Datascience'
import Career from './Career'

function All() {
  return (
    <div className='container' >
      <div className='row' >
        <Fullstackdevelopment />
        <Cybersecurity />
        <Datascience />
        <Career />
      </div>
    </div>
  )
}

export default All