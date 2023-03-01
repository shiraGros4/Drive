import React, { useContext, useEffect, useRef, useState } from 'react'
import FileContext from '../../context/fileContext';
import addFile from '../../functions/addFile';
import style from './style.module.css'
import {RxFilePlus} from 'react-icons/rx'

function AddButtonFile() {
  const { filesDisplay, setFilesDisplay } = useContext(FileContext)
  const inputRef = useRef('')
  const [selectedFile, setSelectedFile] = useState(undefined);

  const inputFileRef = (e) => {
    inputRef.current.click()
  }

  const handleOnChange = (e) =>{
    setSelectedFile(e.target.files[0])
  }

  useEffect (()=>{
    if (selectedFile){
      let formData = new FormData();
      formData.append("file", selectedFile)
      if (formData) {addFile(formData, setFilesDisplay, filesDisplay)}
    }
    
  }, [selectedFile])


  return (
    <div>
        <button className={style.button} onClick={inputFileRef}>
          Add File
          <RxFilePlus/>
        </button>
        
        <input type="file" ref={inputRef} 
        onChange={(e) => handleOnChange(e)}
         hidden/>
    </div>
  )
}

export default AddButtonFile