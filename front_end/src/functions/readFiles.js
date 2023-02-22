import axios from 'axios'

const readFiles = async (path) => {
    try {
        let res = await axios.get("http://localhost:4000/api/getFiles",{params: {q: path}});
        
        return res.data
        
    }
    catch (error) {
        throw error
    }
}

export default readFiles