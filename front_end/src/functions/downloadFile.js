import axios from 'axios'
import { saveAs } from 'file-saver';

const downloadFile = async (name) => {
    try {
        let endFile = name.split('.').pop()
        await axios({
            method: "post",
            url: "http://localhost:4000/api/download",
            data : {path : localStorage.path + "/" + name},
            responseType: 'arraybuffer'
          }).then((response) => {
            let blob = new Blob([response.data], { type: `application/${endFile}` });
            saveAs(blob, `${name}`);
            
        })
        
    }
    catch (error) {
        throw error
    }
}

export default downloadFile