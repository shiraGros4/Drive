import React from 'react'
import AddButtons from '../AddButtons/index'
import PlayFiles from '../playFiles/index'
import './style.css'

function index() {
  return (
    <div className='layout'>
        <div className='add-comp'>
            <AddButtons/>
        </div>
        <div>
            <PlayFiles/>
        </div>
    </div>
  )
}

export default index