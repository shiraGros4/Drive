import axios from 'axios'

const infoStats = async (name) => {
    console.log("in");
    try {
        console.log("in2");
        let res = await axios({
            method: "post",
            url: "http://localhost:4000/api/info",
            data : {path : localStorage.path + "/" + name},
          })
        console.log(res);
        return res.data
        
    }
    catch (error) {
        throw error
    }
}

export default infoStats