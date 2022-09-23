const Validator = require('fastest-validator');
const models = require('../models');

function save(req,res){
    const post = {
        title:req.body.title,
        content:req.body.content,
        imageUrl:req.body.image_url,
        categoryId:req.body.category_id,
        userId:1
    }
    const schema = {
        title:{type:'string',optional:false,max:'100'},
        content:{type:'string',optional:false,max:'500'},
        categoryId:{type:'number',optional:false}
    }
    const obj = new Validator();
    const validateResponse = obj.validate(post, schema);

    if (!validateResponse !== true){
        return res.status(400).json({
            message:'validation failed',
            error:validateResponse
        })
    }
    models.Post.create(post).then(result=>{
        res.status(201).json({
            message:"success",
            post:result
        })
    }).catch(error=>{
        res.status(500).json({
            message:"Fail",
            error:error
        })
    })
}
function show(req, res){
    const id = req.params.id;
    models.Post.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message:"Not Found"
            });
        }
        
    }
    ).catch(error=>{
        res.status(500).json({
            message:"something  went wrong"
        })
    });
}

 function index(req,res){
    models.Post.findAll().then(result=>{
        res.status(200).json(result)
    }
    ).catch(error=>{
        res.status(500).json({
            message:"something  went wrong"
        })
    });
 }

function update(req, res){
    const id = req.params.id;
    const updatePost = {
        title:req.body.title,
        content:req.body.content,
        imageUrl:req.body.image_url,
        categoryId:req.body.category_id
    }
    const userId = 1;
    const schema = {
        title:{type:'string',optional:false,max:'100'},
        content:{type:'string',optional:false,max:'500'},
        categoryId:{type:'number',optional:false}
    }
    const obj = new Validator();
    const validateResponse = obj.validate(updatePost, schema);

    if (!validateResponse !== true){
        return res.status(400).json({
            message:'validation failed',
            error:validateResponse
        })
    }
    models.Post.update(updatePost,{where:{id,userId}}).then(result=>{
        res.status(200).json({
            message:"post updated",
            post:updatePost
        })
    }
    ).catch(error=>{
        res.status(500).json({
            message:"something  went wrong",
            error:error
        })
    });
}

function destroy(req, res){
    const id = req.params.id;
    const userId = 1;

    models.Post.destroy({where:{id,userId}}).then(result=>{
        res.status(200).json({
            message:"post deleted"
        })
    }
    ).catch(error=>{
        res.status(500).json({
            message:"something  went wrong",
            error:error
        })
    });
}

module.exports = {
    save,
    show,
    index,
    update,
    destroy
}