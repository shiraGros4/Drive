import axios from 'axios'

const readFolders = async (path) => {
    try {
        let res = await axios.get("http://localhost:4000/api/getFolders",{params: {q: path}});
        
        return res.data
        
    }
    catch (error) {
        throw error
    }
}

export default readFolders