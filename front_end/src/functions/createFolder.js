import axios from "axios"

const createFolder = async (name) => {
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
        console.log(res);
    }
    catch (error) {
        throw error
    }
}

export default createFolder