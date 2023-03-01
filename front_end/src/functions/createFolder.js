import axios from "axios"
import readFolders from "./readFolders";

const createFolder = async (setFiles, name) => {
    try {
        await axios({
            method: "post",
            url: "http://localhost:4000/api/createFolder",
            data: {path: localStorage.path, name: name}
          });
          readFolders(localStorage.path).then(res => setFiles(res))
          
    }
    catch (error) {
        throw error
    }
}

export default createFolder