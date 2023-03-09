import React, { useContext } from 'react'
import FileContext from '../../context/fileContext';
import style from '../SettingsFile/style.module.css'

function PopuoInfo() {
  const {popupInfo } = useContext(FileContext)
  console.log(popupInfo);
  return (
    <div className={style.popUp}>
      <div className={`${style.option} ${style.details}`}>File Size {(popupInfo.size / (1024*1024)).toFixed(3)}MG</div>
      <div className={`${style.option} ${style.details}`}>Created {(popupInfo.birthtime.split('.')[0]).substring(0,10)}</div>
      <div className={`${style.option} ${style.details}`}>Last Change {(popupInfo.atime.split('.')[0]).substring(0,10)}</div>
    </div>
  )
}

export default PopuoInfo