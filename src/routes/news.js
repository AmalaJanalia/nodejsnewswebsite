const express= require('express');


const newsRouter=express.Router();
const axios =require('axios');

newsRouter.get('',async(req,res)=>{
    //
    try{
     
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-03-15&sortBy=publishedAt&apiKey=3bcdada942024b08b21e2fb561384aa2`)
        const articles = newsAPI.data.articles; 
    
        res.render('news',{articles})
    }
    catch(err){
        if(err.response){
            res.render('news',{articles:null})
            console.log(err.response.data)
        }
        else if(err.request){
            res.render('news',{articles:null})
            console.log(err.request)
        }
        else{
            res.render('news',{articles:null})
            console.error('Error',err.message)
        }

    }
})

newsRouter.get('/article/:name',async(req,res)=>{
    let articleName=req.source.name;
    //
    try{
     
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${articleName}&apiKey=3bcdada942024b08b21e2fb561384aa2`)

        
    
        res.render('newSingle',{article:newsAPI.response.data})
    }
    catch(err){
        if(err.response){
            res.render('newSingle',{article:null})
            console.log(err.response.data)
        }
        else if(err.request){
            res.render('newSingle',{article:null})
            console.log(err.request)
        }
        else{
            res.render('newSingle',{article:null})
            console.error('Error',err.message)
        }

    }
})



newsRouter.post('',async(req,res)=>{
    let search=req.body.search;
    //
    try{
     
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${articleName}&apiKey=3bcdada942024b08b21e2fb561384aa2`)

        
    
        res.render('newSingle',{article:newsAPI.response.data})
    }
    catch(err){
        if(err.response){
            res.render('newSingle',{article:null})
            console.log(err.response.data)
        }
        else if(err.request){
            res.render('newSingle',{article:null})
            console.log(err.request)
        }
        else{
            res.render('newSingle',{article:null})
            console.error('Error',err.message)
        }

    }
})
module.exports=newsRouter;