const mongoose = require('module');
const { trusted } = require('mongoose');

const PostSchema = new mongoose.Schema({

    topic:{ 
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    PostCategory:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Posts ,PostaSchema');