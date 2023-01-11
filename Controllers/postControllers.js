const postsModel = require('../models').posts;
const validator = require('fastest-validator');

const newPost = async (req, res)=>{
    try {
        const data = {
            title: req.body.title,
            desc: req.body.desc,
            postImage: req.file.path,
            content: req.body.content,
            commentId: req.body.commentId
        }
        
        const postSchema = {
            title:{type: 'string', optional:false},
            desc:{type: 'string', optional:false},
            postImage:{type: 'string', optional:true},
            content:{type: 'string', optional:false},
            commentId:{type: 'string', optional:false}
        }

        const v = new validator();
        const validatorResponse = v.validate(data, postSchema)

        if(validatorResponse !== true){
            return res.status(400).json({
                messsage: 'Validation Failed',
                errors: validatorResponse[0].messsage
            });
        }else{
            const createdPost = await postsModel.create(data);
            res.status(201).json({
                messsage: 'New post was Created.',
                data: createdPost
            })
        }

    } catch (e) {
        res.status(400).json({
            messsage: e.messsage
        })
    }
}

module.exports = {
    newPost
}