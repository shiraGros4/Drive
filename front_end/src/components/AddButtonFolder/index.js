import React, { useState } from 'react'
import NameFolder from '../NameFolder/index'

function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [nameFolder, setNameFolder] = useState(false)
    
  return (
    <div>
        <button className='add-button' onClick={()=> setNameFolder(!nameFolder)}>Add Folder</button>
        {nameFolder && <NameFolder setNameFolder={setNameFolder}/>}
    </div>
  )
}

export default index