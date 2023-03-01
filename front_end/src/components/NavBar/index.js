import React from 'react'
import style from './style.module.css'
//import {FiArrowRight} from 'react-icons/fi'

function NavBar() {
    let path = localStorage.path.substring(localStorage.path.indexOf('/')+1)
  return (
    <div className={style.path}>
        {path}
    </div>
  )
}

export default NavBar