`use strict`;

const express = require(`express`);

const axios = require('axios');

const dotEnv=require('dotenv');
dotEnv.config();

const PORT=process.env.PORT;
const APIKEY=process.env.APIKEY;

const movieData= require('./Movie Data/data.json');

const app = express();


function Movie (id, title,release_date, posterPath, overview){
    this.id=id;
    this.title=title;
    this.release_date=release_date;
    this.poster_path=posterPath;
    this.overview=overview;
}

app.get('/hello', helloWorldHandler);

app.get('/', homeHandler);

app.get('/favorite', favoriteHandler);

app.get('/trending',trendingHandler);

app.get('/search',searchHandler);

app.get('/genre', genreHandler);

app.get('/tv', tvHandler);

app.get('/tv/top_rated',topRatedTvHandler);

app.use("*",noEndPointHandler);

function helloWorldHandler(req, res){
    return res.status(200).send("Hello World");
};

function homeHandler(req,res){
    let oneMovie=new Movie(movieData.title, movieData.poster_path, movieData.overview);
    return res.status(200).json(oneMovie);
};

function favoriteHandler(req,res){
    return res.status(200).send("Welcome to Favorite page");
}

function trendingHandler(req,res){
   let movies=[];
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`).then(value => {
        value.data.results.forEach(element => {
            let oneMovie=new Movie(element.id, element.title, element.release_date, element.poster_path, element.overview) 
            movies.push(oneMovie);
        });
        return res.status(200).send(movies);
    }).catch(error =>{
        errorHandler(error,req,res);
    })
}

function topRatedTvHandler(req,res){
    let pagReq= req.query.page;
    let tv=[];
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKEY}&language=en-US&page=${pagReq}`).then(value => {
        value.data.results.forEach(element => {
            let oneTv=element; 
            tv.push(oneTv);
        });
        return res.status(200).send(tv);
    }).catch(error =>{
        errorHandler(error,req,res);
    })
}

function tvHandler(req,res){
    let pagReq= req.query.page;
    let tv=[];
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=en-US&page=${pagReq}`).then(value => {
        value.data.results.forEach(element => {
            let oneTv=element; 
            tv.push(oneTv);
        });
        return res.status(200).send(tv);
    }).catch(error =>{
        errorHandler(error,req,res);
    })
}

function searchHandler(req,res){
    let nameSearch= req.query.name;
    let pageReq=req.query.page;
    let movies=[];
    console.log(req);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${nameSearch}&page=${pageReq}`).then(value => {
        value.data.results.forEach(element => {
            let oneMovie=new Movie(element.id, element.title, element.release_date, element.poster_path, element.overview) 
            movies.push(oneMovie);
        });
        return res.status(200).send(movies);
    }).catch(error =>{
        errorHandler(error,req,res);
    })
}

function genreHandler(req,res){
    let movies=[];
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`).then(value => {
        value.data.genres.forEach(element => {
            let oneMovie=element; 
            movies.push(oneMovie);
        });
        return res.status(200).send(movies);
    }).catch(error =>{
        errorHandler(error,req,res);
    })
}
function noEndPointHandler(req,res){
  return  res.status(404).send("no end point with that name found");
}

function errorHandler(message,req,res){
    const err={
        status : 500,
        message : message.message,
    };
    return res.status(500).send(err);
}


app.listen(PORT, () => {
    console.log(`Listen to port ${PORT}`);
});