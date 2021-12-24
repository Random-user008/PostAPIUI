//Use PostMan to see the ouput

const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("../src/models/post");
const cors = require("cors")
const app = express();

const db = mongoose.connect("mongodb://localhost:27017/nodeApi");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//Adding a post to database
app.post('/newpost',(req,res)=>{
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    //console.log(req);
    var post = new Post();
    post.title = title;
    post.author = author;
    post.content = content;
    post.save((err,saved)=>{
        if(err){
            res.status(500).send({err:"Error"});
        }else{
            res.status(200).send(saved);
        }
    })
});


//Details of single Post
app.get("/posts",(req,res)=>{
    //const title = req.body.title;
    Post.find({},(error,posts1)=>{
        // console.log(posts1)
        if(error){
            res.status(422).send({error:"Post not found!!"});
        }else{
            res.status(200).send(posts1);
        }
    })
})


//Update a Post 
// app.post("/posts/update",(req,res)=>{
//     const title = req.body.title;
//     //const author = req.body.author;
//     const content = req.body.content;
//     Post.findOneAndUpdate({"title":title},{"content":content},{new:true},(error,posts)=>{
//         if(error){
//             res.status(422).send({error:"Post not found!!"});
//         }else{
//             res.status(200).send(posts);
//         }
//     })
// })


// //Delete a post
// app.post("/posts/delete",(req,res)=>{
//     const title = req.body.title;
//     //const author = req.body.author;
//     //const content = req.body.content;
//     Post.findOneAndDelete({"title":title},(error,posts)=>{
//         if(error){
//             res.status(422).send({error:"Post not found!!"});
//         }else{
//             res.status(200).send("Post Deleted..."+posts);
//         }
//     })
// })
console.log('3001');
app.listen( process.env.PORT || 3001);