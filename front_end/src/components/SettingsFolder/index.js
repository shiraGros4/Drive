import React, { useContext, useState } from 'react'
import JSZip from  'jszip';
import { saveAs } from 'file-saver';
import FileContext from '../../context/fileContext';
import rename from '../../functions/rename';
import style from './style.module.css'
import readFiles from '../../functions/readFiles';


function SettingPopUp({name, setDisplaySettings}) {
  const { setFoldersDisplay, setFilesDisplay } = useContext(FileContext)
  let changedName;
  const [renameDisplay, setRenameDisplay] = useState(false)
  //const [files, setFiles] = useState('')
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

  const downloadZip = () => {
    
    readFiles(localStorage.path+"/"+name).then((files) =>{
      console.log(files);
      let filename = "Download."+name;
      let zip = new JSZip();
      const folder = zip.folder(name)
      console.log(folder);
      files.forEach((file)=> {
        if (!file) return;
        console.log(file);                      
        const nameFile = file.substring(file.lastIndexOf('/'))
             folder.file(nameFile, file)
         })
         if (!filename) {
          zip.generateAsync({type:"blob"})
          .then(blob => saveAs(blob, filename))
          .catch(e => console.log(e));
         }
        
    })
   
    
  }

  return (
    <div className={style.popUp}>
      <div className={style.text}>
        <div className={style.option}onClick={setRename}>Rename</div>
        {renameDisplay && <input type="text" onKeyDown={reName}></input>}
        <div className={style.option} onClick={downloadZip}>Download</div>
        <div className={style.option}>Delete</div>
      </div>
    </div>
  )
}

export default SettingPopUp