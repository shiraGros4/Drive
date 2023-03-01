import React, { useContext } from 'react'
import style from '../AddButtonFile/style.module.css'
import {TbArrowBackUp} from 'react-icons/tb'
import readFiles from '../../functions/readFiles'
import readFolders from '../../functions/readFolders'
import FileContext from '../../context/fileContext'

function GoBackButton() {
    const { setFilesDisplay, setFoldersDisplay } = useContext(FileContext)
    const changePath = () => {
        if (localStorage.path !== './myDrive'){
            let newPath = localStorage.path.split('/')
            newPath.pop()
            newPath = newPath.join('/')
            localStorage.path = newPath;
            readFolders(localStorage.path).then(res => {
                setFoldersDisplay(res)})
            readFiles(localStorage.path).then(res => {
                setFilesDisplay(res)})            
        }
    }
  return (
    <button className={style.button} onClick={changePath}>
        Go Back
        <TbArrowBackUp/>
    </button>
  )
}

export default GoBackButton