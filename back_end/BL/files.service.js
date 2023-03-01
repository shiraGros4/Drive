const fs = require('fs')
const AdmZip = require('adm-zip');

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
        return v}})
    files = files.filter(e => e!=undefined)
    return files
}

const getFolders = async (path) => {
    let filesSend = fs.readdirSync(path, (err, files) => {
          if (err){
            console.log(err);
            return}
        })
        let folds = filesSend.map((v) => {if (fs.statSync(`${path}/${v}`, v).isDirectory()){
            
            return v}})
        folds = folds.filter(e => e!=undefined)
        
        return folds
  }

const uploadFile = async (file, path) =>{
    fs.renameSync(`./myDrive/${file[0].filename}`, `${path}/${file[0].originalname}`)
}

const renameFile = async (data)=>{
    fs.renameSync(`${data.path}/${data.origName}`, `${data.path}/${data.newName}`)
}

const downloadZip = ({path}, res) => {
    const zip = new AdmZip();
    path=path.substring(2)
    let dirName = __dirname.split('\BL')[0] + path
    dirName = dirName.split('/')[0]
    zip.addLocalFolder(path)
    const downloadName = `DownloadDrive ${Date.now()}.zip`;
    const data = zip.toBuffer();
    
    
    zip.writeZip(dirName + "/" + downloadName);
    res.set('Content-Type', 'application/zip');
    res.set('Content-Disposition', `attachment; filename=${downloadName}`);
    res.set('Content-Length', data.length);
    res.send(data);
}

const deleteFiles = (data) => {
    let files = fs.readdirSync(data.path, (err, files) => {
        if (err){
          console.log(err);
          return}
      })
    files.map(file => {if (file.includes(data.name)){
        if (data.name === '.zip'){
            fs.unlinkSync(data.path + "/" + file)
        }
        else if(fs.statSync(`${data.path}/${data.name}`, data.name).isDirectory()){
            fs.rmSync(`${data.path}/${data.name}`, { recursive: true, force: true });
        }
        else{
            fs.unlinkSync(data.path + "/" + file)
        }
        
    }})

}

const download = (path, res) => {
    let file = fs.readFileSync(path);
    res.send(file)
}

const getInfo = (path, res) => {
    console.log(fs.statSync(path));
    let file = fs.statSync(path);
    res.send(file)
}

module.exports = { createNewFolder , getFiles, getFolders, createMyDrive, uploadFile ,
    renameFile, downloadZip, deleteFiles, download, getInfo}