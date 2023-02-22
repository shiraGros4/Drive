import axios from 'axios'

const addFile = async (dataForm) => {
    console.log(dataForm.get('file'));
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
    }
    catch (err) {
        console.log(err);
    }
    
}

export default addFile