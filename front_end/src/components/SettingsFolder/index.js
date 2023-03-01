import React, { useContext, useState } from 'react'
import FileContext from '../../context/fileContext';
import fileDelete from '../../functions/delete';
import downloadZip from '../../functions/downloadZip';
import rename from '../../functions/rename';
import style from './style.module.css'


function SettingPopUp({name, setDisplaySettings}) {
  const { setFoldersDisplay, setFilesDisplay } = useContext(FileContext)
  let changedName;
  const [renameDisplay, setRenameDisplay] = useState(false)
  const setRename = (e) =>{
    setRenameDisplay(!renameDisplay)
  }
  const reName = (e) =>{
    if (e.key === 'Enter'){
      changedName = e.target.value;
      console.log(name);
      console.log(changedName);
      rename(name, changedName, setFilesDisplay, setFoldersDisplay);
    }
  }
  const downloadZipFolder = () => {
    downloadZip(name)
  }
  const delFile = () => {
    fileDelete(localStorage.path, name, setFilesDisplay, setFoldersDisplay)
  }

  return (
    <div className={style.popUp}>
      <div className={style.text}>
        <div className={style.option}onClick={setRename}>Rename</div>
        {renameDisplay && <input type="text" onKeyDown={reName}></input>}
        <div className={style.option} onClick={downloadZipFolder}>Download</div>
        <div className={style.option} onClick={delFile}>Delete</div>
      </div>
    </div>
  )
}

export default SettingPopUp