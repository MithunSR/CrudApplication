const express = require('express');
const posts = require('../models/posts');
const Posts = require('../models/posts');

const router = express.Router();

//save posts

router.post('/post/save',(req,res)=>{

    let newPost =new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"POSTS saved successfully"
        });
    });

}) ;

// get posts

router.get('/posts',(req,res) =>{ 
    posts.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            } );
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
      });
   
    });
});
// update posts
router.put('/post/update/:id',(req,res) =>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
    (err,post) =>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"UPdated Successfully"
        })
    }
    );
});


//delete post

router.delete('/post/delete/:id',(req,res) => {
    posts.findOneAndRemove(req.params.id).exec((err,deletedpost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successfull",deletedpost
        });
    } );
});

module.exports =  router;