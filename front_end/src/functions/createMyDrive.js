import axios from "axios";

const createMyDrive = async () => {
    localStorage.path = "./myDrive"
    try {
        const res = await axios({
            method: "post",
            url: "http://localhost:4000/api/",
          });
          console.log(res);
          
    }
    catch (error) {
        throw error
    }
}

export default createMyDrive