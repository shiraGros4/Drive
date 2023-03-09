import React, { useState } from 'react'
//import FuncButton from '../FuncButton'
import style from './style.module.css'
import {TfiMenuAlt} from 'react-icons/tfi'
import {BsImages, BsFileEarmarkPdf, BsFileEarmarkWord, BsFiles, BsFileEarmarkMusic} from 'react-icons/bs'
import {SiMicrosoftpowerpoint} from 'react-icons/si'
import SettingsFile from '../SettingsFile'
import PopuoInfo from '../PopupInfo'

function File({name}) {
  const [displaySettings, setDisplaySettings] = useState(false)
  const [infoDisplay, setInfoDisplay] = useState(false)
  let type = name.split('.').pop()
  let reactIcon = '';
  if (type === 'jpg' || type === 'png'){
    reactIcon = <BsImages/>
  }
  else if (type === 'pdf'){
    reactIcon = <BsFileEarmarkPdf/>
  }
  else if (type === 'word'){
    reactIcon = <BsFileEarmarkWord/>
  }
  else if (type === 'ptx' || type === 'pptx'){
    reactIcon=<SiMicrosoftpowerpoint/>
  }
  else if (type === 'mp3'){
    reactIcon=<BsFileEarmarkMusic/>
  }
  else {
    reactIcon = <BsFiles/>
  }
  return (
    <div  className={style.container} onMouseLeave={()=>{
      setDisplaySettings(false)
      setInfoDisplay(false)}}>
       <div key={name} id={name} className={style.files}>
        <div>{reactIcon}</div>
        <span className={style.name}>{name}</span>
        <TfiMenuAlt className={`${style.click} ${style.settings}`} onClick={() => {
          setInfoDisplay(false)
          setDisplaySettings(!displaySettings)
          }}/>
       </div>
       {displaySettings && <div className={style.menu}><SettingsFile 
       setDisplaySettings={setDisplaySettings} name={name} setInfoDisplay={setInfoDisplay}/></div>}
       {infoDisplay && <div className={style.menu}><PopuoInfo/></div>}
    </div>
   
  )
}

export default File