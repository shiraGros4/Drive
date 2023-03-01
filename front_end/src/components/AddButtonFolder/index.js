import React, { useState } from 'react'
import NameFolder from '../NameFolder/index'
import style from '../AddButtonFile/style.module.css'
import {BsFolderPlus} from 'react-icons/bs'

function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nameFolder, setNameFolder] = useState(false)
    
  return (
    <div>
        <button className={style.button} onClick={()=> setNameFolder(!nameFolder)}>
          Add Folder
          <BsFolderPlus/>
        </button>
        {nameFolder && <NameFolder setNameFolder={setNameFolder}/>}
    </div>
  )
}

export default index