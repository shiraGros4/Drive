import axios from "axios";
import { saveAs } from 'file-saver';
import fileDelete from "./delete";

const downloadZip = async (name) => {
    try {
        await axios({
            method: "post",
            url: "http://localhost:4000/api/downloadZip",
            data : {path : localStorage.path + "/" + name},
            responseType: 'arraybuffer'
          }).then((response) => {
            console.log(response.data);
            let blob = new Blob([response.data], { type: "application/zip" });
            saveAs(blob, `download${name}${Date.now()}.zip`);
            
        }).then((response) => {fileDelete('./myDrive', '.zip')})
         
    }
    catch (error) {
        throw error
    }
}

export default downloadZip