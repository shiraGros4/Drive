import { useState } from "react"

import FileContext from "./fileContext"

export const ContextProvider = (children) => {
    const [files, setFiles] = useState('')

    return(
        <FileContext.Provider value={{files, setFiles}}>
            {children}
        </FileContext.Provider>
    )
 }