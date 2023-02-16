import React, { useState } from 'react'
import './style.css'
import createFolder from '../../functions/createFolder';

function NameFolder(props) {
    const [value, setValue] = useState('folder without name');
    const handleClick = () => {
        props.setNameFolder(false)
        createFolder(value);
        //checkExists -- if true -> open folder
        // if false --> EROR, main menu
        console.log(value);
    }
  return (
    <div className='popUp' onDoubleClick={() => props.setNameFolder(false)}>
        <div>
            New Folder
        </div>
        <div>
            <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='folder without name'></input>
            
        </div>
        <div className='btn-create'>
            <button onClick={handleClick}>Create</button>
        </div>
    </div>
  )
}

export default NameFolder