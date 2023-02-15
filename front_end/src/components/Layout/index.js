import React from 'react'
import AddButtons from '../AddButtons/index'
import './style.css'

function index() {
  return (
    <div className='layout'>
        <div className='add-comp'>
            <AddButtons/>
        </div>
        <div>
            Files
        </div>
    </div>
  )
}

export default index