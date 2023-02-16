import axios from 'axios'

const check = (path) => {
    let res = readFiles(path)
    console.log("res", res);
    return res
}

const readFiles = async (path) => {
    try {
        const res = await axios.get("http://localhost:4000/api/getFiles",{params: {q: path}});
        console.log(res.data);
        return res.data
    }
    catch (error) {
        throw error
    }
}

export default check