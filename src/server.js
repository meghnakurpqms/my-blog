import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import path from 'path';

//fake database for upvotes
// const articlesInfo = {
//     'learn-react':{
//         upvotes:0,
//         comments:[],
//     },
//     'learn-node':{
//         upvotes:0,
//         comments:[],
//     },
//     'my-thoughts-on-resumes':{
//         upvotes:0,
//         comments:[],
//     },
// }

const app = express(); // With this we can define different end points for our app 

// parses the json data and adds a body property to the request 
// tell express how to get front end and static pages
app.use(express.static(path.join(__dirname,'/build')));
//parameter for a particular request
app.use(bodyParser.json());



// for a common db connection with oerations as an argument.
// Operations is a function
const withDb = async (operation,res) =>
{
    try{
       
        // db connection
        const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true});
        const db= client.db('my-blog');

        await operation(db);
         // client connection 
         client.close();
        }
        catch(error)
        {
            res.status(500).json({message:'Something went wrong: '+ error});
        }
}

// Routes
// app.get('/hello',(req,res) => res.send('Hello!'));
// app.get('/hello/:name',(req,res) => res.send(`Hello ${req.params.name}!`));
// app.post('/hello',(req,res) => res.send(`Hello! ${req.body.name}!`));

//Route for a particular article
app.get('/api/articles/:name/',async(req,res) =>{
    // since we are using await we need to add the async keyword
   withDb(async(db) => {
       const articleName = req.params.name;
       const articleInfo = await db.collection('articles').findOne({name:articleName})
       // send response
       res.status(200).json(articleInfo);
   },res);
    
     // client connection 
    
});
// route for upvotes
app.post('/api/articles/:name/upvote', async(req,res) => {
   
   withDb(async(db) => {

    const articleName = req.params.name;
   // db connection
   
    // get the article for that particular name
    const articleInfo = await db.collection('articles').findOne({name:articleName});
    // update query
    await db.collection('articles').updateOne({name:articleName}, 
        {
            '$set': { 
                        upvotes:articleInfo.upvotes+1,
                    },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({name:articleName});

        res.status(200).json(updatedArticleInfo);
   },res);
    
        
   
});
app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDb(async (db) => {
        const articleInfo = await db.collection('articles').findOne({name:articleName});
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});

// app.post('/api/articles/:name/add-comment',(req,res) =>
// {
//     const articleName = req.params.name;
//     const { username,text} = req.body;
   
//     withDb(async(db)=>{
//         const articleInfo = await db.collection('articles').findOne({ name: articleName});
        
//         await db.collection('articles').updateOne({name:articleName},{
//             '$set':{
//                 comments:articleInfo.comments.concat({username, text}),
//             },
//         });
//         updatedArticleInfo = await db.collection('articles').findOne({name:articleName});
//         req.status(200).json(updatedArticleInfo);
//     },res);
// });
// for listening on a port
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
})
app.listen(8000,()=>console.log('Listening on port 8000'));