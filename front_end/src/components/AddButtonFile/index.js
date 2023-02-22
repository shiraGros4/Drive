import React, { useContext, useEffect, useRef, useState } from 'react'
import FileContext from '../../context/fileContext';
import addFile from '../../functions/addFile';

function AddButtonFile() {
  const { setFiles } = useContext(FileContext)
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
      if (formData) {addFile(formData, setFiles)}
    }
    
  }, [selectedFile])


  return (
    <div>
        <button className='add' onClick={inputFileRef}>Add File</button>
        <input type="file" ref={inputRef} className='add-button' 
        onChange={(e) => handleOnChange(e)}
         hidden/>
    </div>
  )
}

export default AddButtonFile