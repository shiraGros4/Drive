import React, { useEffect, useState } from 'react'
import check from '../../functions/readFiles'
import File from '../File'

function PlayFiles() {
    const [files, setFiles] =useState('');
    useEffect (() =>{
        setFiles(check(localStorage.path ? localStorage.path : './myDrive'))
    }, [])
    //setFiles(readFiles(localStorage.path ? localStorage.path : './myDrive'))
    console.log("in here", files);
  return (
    <div>
        {files === undefined ? "NO Files" : files.length > 0 ?
          files.map((v) => {return <File props = {v} />})
           : "No Files"
        }
    </div>
  )
}


export default PlayFiles
