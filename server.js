`use strict`;

const express = require(`express`);
const { get } = require('express/lib/response');

const movieData= require('./Movie Data/data.json');

const app = express();


function Movie (title, posterPath, overview){
    this.title=title;
    this.poster_path=posterPath;
    this.overview=overview;
}

app.get('/hello', helloWorldHandler);
app.get('/', homeHandler);
app.get('/favorite', favoriteHandler)

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

app.listen(3000, () => {
    console.log('Listen to port 3000');
});