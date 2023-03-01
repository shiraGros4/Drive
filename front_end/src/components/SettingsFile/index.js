import React, {useContext, useState} from 'react'
import FileContext from '../../context/fileContext';
import fileDelete from '../../functions/delete';
import downloadFile from '../../functions/downloadFile';
import infoStats from '../../functions/infoStats';
import rename from '../../functions/rename';
import style from './style.module.css'


function SettingFile({name}) {
  const { setFilesDisplay, setFoldersDisplay, popupInfoDisplay, setPopupInfoDisplay } = useContext(FileContext)
  let changedName;
  let endName = name.split('.').pop()
  const [renameDisplay, setRenameDisplay] = useState(false)
  const setRename = (e) =>{
    setRenameDisplay(!renameDisplay)
  }
  const reName = (e) =>{
    if (e.key === 'Enter'){
      changedName = e.target.value +'.'+ endName;
      console.log(name);
      console.log(changedName);
      rename(name, changedName, setFilesDisplay, setFoldersDisplay);
    }
  }
  const delFile = () => {
    fileDelete(localStorage.path, name, setFilesDisplay, setFoldersDisplay)
  }
  const downFileClick = () => {
    downloadFile(name)
  }
  const getInfo = () => {
    let data = infoStats(name).then((info) => {
      setPopupInfoDisplay(info)
    })
   
  }

  return (
    <div className={style.popUp}>
      <div className={style.text}>
        <div className={style.option} onClick={setRename}>Rename</div>
        {renameDisplay && <input type="text" onKeyDown={reName}></input>}
        <div className={style.option} onClick={downFileClick}>Download</div>
        <div className={style.option} onClick={delFile}>Delete</div>
        <div className={style.option} onClick={getInfo}>Info</div>
      </div>
    </div>
  )
}

export default SettingFile