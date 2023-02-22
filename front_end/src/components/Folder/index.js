import React from 'react'
import style from './style.module.css'
import {MdFolderSpecial} from 'react-icons/md'

function Folder({name}) {
  return (
    <div className={style.folds}>
      <MdFolderSpecial/>
      {name}
    </div>
  )
}

export default Folder