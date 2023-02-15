import React, { useState } from 'react'
import './style.css'

function NameFolder(props) {
    const [value, setValue] = useState('folder without name');
    const handleClick = () => {
        console.log(value);
    }
  return (
    <div className='popUp' onClick={() => props.setNameFolder(false)}>
        <div>
            New Folder
        </div>
        <div>
            <input type="text" onChange={(e)=>setValue(e.target.value)} value='folder without name'></input>
            
        </div>
        <div className='btn-create'>
            <button value="Focus the text input" onClick={handleClick}>Create</button>
        </div>
    </div>
  )
}

export default NameFolder