const express = require('express');
const { LooseStorage } = require('git');
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "myDrive/" });
//const storage = multer ({storage : storage})
const fileService = require('../BL/files.service');




router.all('/createFolder', async (req, res)=> {
    try {
        const newFold = await fileService.createNewFolder(req.body)
        res.send(newFold)
    }
    catch (error) {
        console.log(error);
    }
})

router.all('/', async (req, res)=> {
    try {
        await fileService.createMyDrive()
    }
    catch (error) {
        console.log(error);
    }
})

router.all(`/getFiles`, async (req, res)=> {
    try {
        const files = await fileService.getFiles(req.query.q)
        res.send(files)
    }
    catch (error) {
        console.log(error);
    }
})

router.all(`/getFolders`, async (req, res)=> {
    try {
        const files = await fileService.getFolders(req.query.q)
        res.send(files)
    }
    catch (error) {
        console.log(error);
    }
})


router.all('/uploadFile', upload.any('file'), async (req, res)=> {
    try {
        await fileService.uploadFile(req.files, req.query.q)
        res.send('Successfully')
    }
    catch (error) {
        console.log(error);
    }
})

router.all('/rename', async (req, res)=> {
    try {
        await fileService.renameFile(req.body)
        res.send('Successfully')
    }
    catch (error) {
        console.log(error);
    }
})

router.all('/downloadZip', async (req, res)=> {
    try {
        let result = await fileService.downloadZip(req.body, res)
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
})

router.all('/delete', async (req, res)=> {
    try {
        "innn"
        await fileService.deleteFiles(req.body)
        res.send('Successfully')
    }
    catch (error) {
        console.log(error);
    }
})

router.all('/download', async (req, res) => {
    try {
        let result = await fileService.download(req.body.path, res)
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
})

router.all('/info', async (req, res) => {
    try {
        let result = await fileService.getInfo(req.body.path, res)
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
})

module.exports = router;