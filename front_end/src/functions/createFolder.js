import axios from "axios"
import readFiles from "./readFiles";

const createFolder = async (setFiles, name) => {
    let path;
    if (localStorage.path === undefined) {
        path = './myDrive'
        localStorage.path = path;
    }
    else{
        path = localStorage.path;
    }
    try {
        const res = await axios({
            method: "post",
            url: "http://localhost:4000/api/createFolder",
            data: {path: path, name: name}
          });
          readFiles(localStorage.path ? localStorage.path : './myDrive').then(res => setFiles(res))
          
    }
    catch (error) {
        throw error
    }
}

export default createFolder