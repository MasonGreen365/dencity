//use client indicates this component should be rendered on the client side
//this supports interactivity, and handles events like onClick
'use client';
import React from 'react'

const ViewForMoreInfo = () => {
  return (
    <button className='btn btn-primary' 
        onClick={() => console.log('Click')}>View for more information
    </button>
  )
}

export default ViewForMoreInfo