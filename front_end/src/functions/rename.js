import axios from 'axios'
import readFiles from './readFiles';
import readFolders from './readFolders';

const rename = async ( origName, newName, setFilesDisplay, setFoldersDisplay)=> {
    try {
        await axios({
            method: "put",
            url: "http://localhost:4000/api/rename",
            data: {path: localStorage.path, origName: origName, newName: newName}
          });
          readFiles(localStorage.path).then(res => {
            setFilesDisplay(res)
        console.log(res);})
        readFolders(localStorage.path).then(res => {
            setFoldersDisplay(res)
        console.log(res);})
          
    }
    catch (e) {
        console.log(e);
    }
}

export default rename