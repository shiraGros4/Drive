const express = require('express')
const router = express.Router();
const fileService = require('../BL/files.service');

router.all('/createFolder', async (req, res)=> {
    try {
        const newFold = await fileService.createNewFolder(req.body)
        res.send(newFold)
    }
    catch (error) {
        console.log(error);
    }
    fileService.createNewFolder
})

router.all(`/getFiles`, async (req, res)=> {
    console.log(req.query);
    try {
        const files = await fileService.getFiles(req.query.q)
        console.log("files", files);
        res.send(files)
    }
    catch (error) {
        console.log(error);
    }
})



module.exports = router;