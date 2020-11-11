const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    }
})

mongoose.model('Blog', blogSchema);

