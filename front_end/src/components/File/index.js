import React from 'react'
import style from './style.module.css'

function File({name}) {
  return (
    <div className={style.files}>
      {name}
    </div>
  )
}

export default File