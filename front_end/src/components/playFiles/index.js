import React, { useContext, useEffect} from 'react'
import FileContext from '../../context/fileContext'
import createMyDrive from '../../functions/createMyDrive'
import readFiles from '../../functions/readFiles'
import Folder from '../Folder'
import File from '../File'
import readFolders from '../../functions/readFolders'
import style from './style.module.css'

function PlayFiles() {
  
    const { filesDisplay, setFilesDisplay } = useContext(FileContext)
    const { foldersDisplay, setFoldersDisplay } = useContext(FileContext)
    //using this function to call server and get files name
    useEffect(()=> {
      createMyDrive()
      readFiles(localStorage.path ? localStorage.path : './myDrive').then(res => setFilesDisplay(res))
      readFolders(localStorage.path ? localStorage.path : './myDrive').then(res => setFoldersDisplay(res))
    }, [ setFilesDisplay, setFoldersDisplay])
      
      
  return (
    <div className={style.all}>
      <br/>
      <div className={style.name}>
        Folders
      </div>
      
      <br/>
      <div className={style.allFiles}>
      
        {foldersDisplay.length > 0 ?
         foldersDisplay.map((v) => { return <Folder name={v} key={v}/> })
         : "No Folders"}
      </div>
      <br/><br/>
      <div className={style.name}>
        Files
      </div>
      
      <br></br>
      <div className={style.allFiles}>
      
      {filesDisplay.length > 0 ?
         filesDisplay.map((v) => { return <File name={v} key={v} /> })
         : "No Files"}
      </div>
    </div>
  )
}


export default PlayFiles
