import React, { useState, useContext } from 'react'
import './style.css'
import createFolder from '../../functions/createFolder';
import FileContext from '../../context/fileContext'

function NameFolder({setNameFolder}) {
    const { setFiles } = useContext(FileContext)
    const [value, setValue] = useState('folder without name');
    const handleClick = () => {
        setNameFolder(false)
        createFolder(setFiles, value);
        //checkExists -- if true -> open folder
        // if false --> EROR, main menu
        console.log(value);
    }
  return (
    <div className='popUp' onClick={() => setNameFolder(false)}>
        <div onClick={(event) => event.stopPropagation()}>
        <div> New Folder</div>
        <div>
            <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='folder without name'></input>
        </div>
        <div className='btn-create'>
            <button onClick={handleClick}>Create</button>
        </div>
        </div>
    </div>
  )
}

export default NameFolder