import React, { useState, useContext } from 'react'
import style from './style.module.css'
import createFolder from '../../functions/createFolder';
import FileContext from '../../context/fileContext'

function NameFolder({setNameFolder}) {
    const { setFoldersDisplay } = useContext(FileContext)
    const [value, setValue] = useState('folder without name');
    const handleClick = () => {
        setNameFolder(false)
        createFolder(setFoldersDisplay , value);
        //checkExists -- if true -> open folder
        // if false --> EROR, main menu
        console.log(value);
    }
  return (
    <div className={style.popUp} onClick={() => setNameFolder(false)}>
        <div className={style.back}
        onClick={(event) => event.stopPropagation()}>
            <div className={style.title}> New Folder</div>
            <div >
                <input type="text" className={style.textFolder} onChange={(e)=>setValue(e.target.value)} placeholder='folder without name'></input>
            </div>
            <div >
                <button onClick={handleClick}>Create</button>
            </div>
        </div>
    </div>
  )
}

export default NameFolder