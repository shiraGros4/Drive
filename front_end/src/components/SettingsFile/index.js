import React, {useContext, useState} from 'react'
import FileContext from '../../context/fileContext';
import rename from '../../functions/rename';
import style from './style.module.css'


function SettingFile({name}) {
  const { setFilesDisplay, setFoldersDisplay } = useContext(FileContext)
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

  return (
    <div className={style.popUp}>
      <div className={style.text}>
        <div className={style.option} onClick={setRename}>Rename</div>
        {renameDisplay && <input type="text" onKeyDown={reName}></input>}
        <div className={style.option}>Download</div>
        <div className={style.option}>Delete</div>
        <div className={style.option}>Info</div>
      </div>
    </div>
  )
}

export default SettingFile