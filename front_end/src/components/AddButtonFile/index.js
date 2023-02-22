import React, { useEffect, useRef, useState } from 'react'
import addFile from '../../functions/addFile';

function AddButtonFile() {
  
  const inputRef = useRef('')
  const [selectedFile, setSelectedFile] = useState(null);

  const inputFileRef = (e) => {
    inputRef.current.click()
  }

  const handleOnChange = (e) =>{
    setSelectedFile(e.target.files[0])
  }

  useEffect (()=>{
    let formData = new FormData();
    formData.append("file", selectedFile)
    if (formData) {addFile(formData)}
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