import React, { useContext, useEffect} from 'react'
import FileContext from '../../context/fileContext'
import createMyDrive from '../../functions/createMyDrive'
import readFiles from '../../functions/readFiles'
import Folder from '../Folder'
import File from '../File'
import readFolders from '../../functions/readFolders'

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
    <div>
      <div className="folds">
        {foldersDisplay.map((v) => {
          console.log(foldersDisplay);
          return <Folder name={v}/>})}
      </div>
      <div className='files'>
        {filesDisplay.map((v) => {return <File name={v}/>})}
      </div>
    </div>
  )
}


export default PlayFiles
