import axios from 'axios'
import readFiles from './readFiles';

const addFile = async (dataForm, setFiles) => {
    let path;
    if (localStorage.path === undefined) {
        path = './myDrive'
        localStorage.path = path;
    }
    else{
        path = localStorage.path;
    }
    try {
        
        await axios({
            method: "post",
            url: "http://localhost:4000/api/uploadFile",
            data: dataForm,
            params: {q: path},
            headers: {
                "Content-Type": "multipart/form-data",
              }
          });
          readFiles(localStorage.path ? localStorage.path : './myDrive').then(res => setFiles(res))
    }
    catch (err) {
        console.log(err);
    }
    
}

export default addFile