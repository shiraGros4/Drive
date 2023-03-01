import React, { useContext } from 'react'
import FileContext from '../../context/fileContext';
import style from './style.module.css'

function PopuoInfo() {
  const {popupInfoDisplay, setPopupInfoDisplay } = useContext(FileContext)
  console.log(popupInfoDisplay);
  return (
    <div className={style.container}>
      <p>File Size - {(popupInfoDisplay.size / (1024*1024)).toFixed(3)}MG</p>
      <p>Created - {(popupInfoDisplay.birthtime.split('.')[0]).substring(0,10)}</p>
      <p>Last Change - {(popupInfoDisplay.atime.split('.')[0]).substring(0,10)}</p>
    </div>
  )
}

export default PopuoInfo