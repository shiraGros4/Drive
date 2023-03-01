import React, { useContext, useState } from 'react'
import style from '../File/style.module.css'
import {MdFolderSpecial} from 'react-icons/md'
//import FuncButton from '../FuncButton'
import FileContext from '../../context/fileContext'
import readFiles from '../../functions/readFiles'
import readFolders from '../../functions/readFolders'
import {TfiMenuAlt} from 'react-icons/tfi'
import SettingsFolder from '../SettingsFolder'

function Folder({name}) {
  const [displaySettings, setDisplaySettings] = useState(false)
  const { setFilesDisplay } = useContext(FileContext)
  const { setFoldersDisplay } = useContext(FileContext)
  const intoFolder =(e) => {
    localStorage.path += `/${e.target.id}`
    readFiles(localStorage.path).then(res => setFilesDisplay(res))
    readFolders(localStorage.path).then(res =>setFoldersDisplay(res))
  }
  return (
    <div className={style.container} onMouseLeave={()=>setDisplaySettings(false)}>
      <div className={style.files}>
        <div><MdFolderSpecial /></div>
        <span className={`${style.click} ${style.name}`} key={name} id={name} onDoubleClick={(e)=>intoFolder(e)}>
          {name}
        </span>
        <TfiMenuAlt className={`${style.click} ${style.settings}`} onClick={() => setDisplaySettings(!displaySettings)}/>
      </div>
      {displaySettings && <div className={style.menu}><SettingsFolder name={name} setDisplaySettings={setDisplaySettings}/></div>}
    </div>
    
    
  )
}

export default Folder