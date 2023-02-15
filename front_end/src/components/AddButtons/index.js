import React from 'react'
import AddButtonFile from '../AddButtonFile/index'
import AddButtonFolder from '../AddButtonFolder/index'
import './style.css'


function AddButtons() {
  return (
    <div className='add'>
        <AddButtonFile/>
        <AddButtonFolder/>
    </div>
  )
}

export default AddButtons