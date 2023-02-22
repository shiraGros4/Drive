const express = require('express');
const { LooseStorage } = require('git');
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "myDrive/" });
//const storage = multer ({storage : storage})
const fileService = require('../BL/files.service');




router.all('/createFolder', async (req, res)=> {
    console.log(req.body);
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
        const newFold = await fileService.createMyDrive()
        console.log(newFold);
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
        console.log(files);
        res.send(files)
    }
    catch (error) {
        console.log(error);
    }
})


router.all('/uploadFile', upload.any('file'), async (req, res)=> {
    try {
        await fileService.uploadFile(req.files, req.query.q)
    }
    catch (error) {
        console.log(error);
    }
})

module.exports = router;