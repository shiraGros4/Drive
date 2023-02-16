const fs = require('fs')

const createNewFolder = (data) => {
    // Create the main folder if it wasn't already created 
    let isExists = fs.existsSync(data.path)
    if (!isExists) {fs.mkdirSync(data.path)}
    let path = `${data.path}/${data.name}`
    isExists = fs.existsSync(path)
    console.log(isExists);
    if (isExists && fs.statSync(path).isDirectory()){
        return false
    }
    fs.mkdirSync(`${path}`)
    return true
}

const getFiles = async (path) => {
  let filesSend = fs.readdirSync(path, (err, files) => {
        if (err){
          console.log(err);
          return}
      })
      return filesSend
}

module.exports = { createNewFolder , getFiles }