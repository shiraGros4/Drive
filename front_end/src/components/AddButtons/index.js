import React from 'react'
import AddButtonFile from '../AddButtonFile/index'
import AddButtonFolder from '../AddButtonFolder/index'
import GoBackButton from '../GoBackButton'
import style from './style.module.css'


function AddButtons() {
  return (
    <div className={style.add}>
        <AddButtonFile/>
        <AddButtonFolder/>
        <GoBackButton/>
    </div>
  )
}

export default AddButtons