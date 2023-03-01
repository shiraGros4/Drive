import axios from 'axios'
import readFiles from './readFiles';

const addFile = async (dataForm, setFilesDisplay) => {
    try {
        await axios({
            method: "post",
            url: "http://localhost:4000/api/uploadFile",
            data: dataForm,
            params: {q: localStorage.path},
            headers: {
                "Content-Type": "multipart/form-data",
              }
          });
          readFiles(localStorage.path).then(res => {
            setFilesDisplay(res)
        console.log(res);})
          
    }
    catch (err) {
        console.log(err);
    }
    
}

export default addFile