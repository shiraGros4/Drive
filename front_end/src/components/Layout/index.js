import React from 'react'
import AddButtons from '../AddButtons/index'
import NavBar from '../NavBar'
import PlayFiles from '../PlayFiles/index'
import style from './style.module.css'
import {Route, Routes, Navigate} from 'react-router-dom'


function Layout() {
  return (
    <div className={style.layout}>
        <div className={style.navComp}>
          <NavBar/>
        </div>
        <div className={style.addComp}>
            <AddButtons/>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Navigate to='/myDrive'/>}/>
            <Route path='/myDrive' element={<PlayFiles/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Layout