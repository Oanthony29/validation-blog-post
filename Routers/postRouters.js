const express = require ('express');
const router = express.Router();
const {newPost, } = require('../Controllers/postControllers');
const ImageUpload = require ('../helpers/multer')

router.post('/posts',ImageUpload,newPost);

module.exports = router