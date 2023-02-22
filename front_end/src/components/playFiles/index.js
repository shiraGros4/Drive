import React, { useContext, useEffect} from 'react'
import FileContext from '../../context/fileContext'
import createMyDrive from '../../functions/createMyDrive'
import readFiles from '../../functions/readFiles'
import Folder from '../Folder'
import File from '../File'

function PlayFiles() {
    const { files, setFiles } = useContext(FileContext)
    //using this function to call server and get files name
    useEffect(()=> {
      createMyDrive()
      readFiles(localStorage.path ? localStorage.path : './myDrive').then(res => setFiles(res))
    }, [setFiles])
  return (
    <div>
        {files.length === 0 ?  "No files": 
          files.map((v) => {
            if(v.includes('.')) {
              return <File name = {v} />}
            else {return <Folder name={v}/>}
})
        }
    </div>
  )
}


export default PlayFiles
