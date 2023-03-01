import axios from 'axios'

const getFiles = async (path) => {
    try {
        let res = await axios.get("http://localhost:4000/api/getFilesZip",{params: {q: path}});
        
        return res.data
        
    }
    catch (error) {
        throw error
    }
}

export default getFiles