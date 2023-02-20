import React from 'react'
import AddButtons from '../AddButtons/index'
import PlayFiles from '../PlayFiles/index'
import './style.css'

function Layout() {
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

export default Layout