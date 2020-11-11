const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const User = mongoose.model('User');
const Blog = mongoose.model('Blog');


router.post('/signup', async(req, res)=>{
 
    const {email,password} = req.body;

    try{
        const user = new User({email, password});
         await user.save();
         res.send('Post Successfull')
    }catch(err){
        res.status(422).send(err.message)
    }
}) 


router.post('/blog_create', async(req, res)=>{
    const {title,description, authorName} = req.body;

    try{
        const blog = new Blog({title, description,authorName});
       await blog.save();
        res.send('Blog Post Successfull')
    }catch{
        res.status(422).send(err, message)
    }

})

module.exports = router