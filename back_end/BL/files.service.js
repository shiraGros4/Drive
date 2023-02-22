const fs = require('fs')

const createMyDrive = () => {
    let isExists = fs.existsSync('./myDrive')
    if (!isExists) {fs.mkdirSync('./myDrive')}
}

const createNewFolder = (data) => {
    // Create the main folder if it wasn't already created 
    let isExists = fs.existsSync(data.path)
    if (!isExists) {fs.mkdirSync(data.path)}
    let path = `${data.path}/${data.name}`
    isExists = fs.existsSync(path)
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
    let files = filesSend.map((v) => {if (!(fs.statSync(`${path}/${v}`, v).isDirectory())){
        console.log(fs.statSync(`${path}/${v}`, v).isDirectory());
        console.log(`${path}/${v}`);
        return v}})
    files = files.filter(e => e!=undefined)
    console.log(files);
    return files
}

const getFolders = async (path) => {
    let filesSend = fs.readdirSync(path, (err, files) => {
          if (err){
            console.log(err);
            return}
        })
        let folds = filesSend.map((v) => {if (fs.statSync(`${path}/${v}`, v).isDirectory()){
            console.log(fs.statSync(`${path}/${v}`, v).isDirectory());
            console.log(`${path}/${v}`);
            return v}})
        folds = folds.filter(e => e!=undefined)
        console.log(folds);
        return folds
  }

const uploadFile = async (file, path) =>{
    fs.renameSync(`./myDrive/${file[0].filename}`, `${path}/${file[0].originalname}`)
}

module.exports = { createNewFolder , getFiles, getFolders, createMyDrive, uploadFile }