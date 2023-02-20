import React, { useContext} from 'react'
import FileContext from '../../context/fileContext'
import File from '../File'

function PlayFiles() {
    const { files } = useContext(FileContext)
  return (
    <div>
        {files === undefined ? "NO Files" : files.length > 0 ?
          files.map((v) => {return <File name = {v} />})
           : "No Files"
        }
    </div>
  )
}


export default PlayFiles
