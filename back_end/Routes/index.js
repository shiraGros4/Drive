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



module.exports = router;