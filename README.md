# Movies-Library - version 1.0.0.0
**Author Name**: Mohammad Salameh

## WRRC
![](./assets/WRRC.jpg)

## Overview
In This week we will create the backend of our new web application, for now we just learned how to get the data from a json file and call it using an end point "/", we also learned how to use and open API.
Added some database to our code, we now can add movie's data and retrieve the movies that we added.
We can also use put and delete do update our database for a specific entry.

## Getting Started
1. creat a new repository and clone it to your machine
2. use npm init -y to initiate your project
3. use npm install express and then start coding
4. call express and add it to a variable.
5. install your data.
6. create a constructor to reformat your data.
7. add a get request with the required end point and it's handler function
8. now when the end point is called, the handler should respond with the formatted data as required.
9. in this case we also added an end point for favorite, and got "welcome to favorite" as a response.
10. add a .env file and add your API key & your PORT number.
11. include in the .env file a database url "postgre://username:password@localhost:5432/databaseName.

## Project Features
- using "/" gives you the formatted data
- using "/favorite" gives you a "welcome to favorite" message
- use "/trending" to find an array of trending movies
- use "/search?name=''" to search for a movie by name
- use "/tv" to get an array of most popular tv series
- use "/tv/top_rated" to get an array of top rated tv series
- use "/genre" to find a list of genres
- use "/addMovie" to add favorite movies with the following properties to the data base (title, release_date,poster_path, overview, comment).
- use "/getMovies" to retrieve the data from your favorite movies data.
- use "/getMovie/*id* to get a specific entry in the database.
- use "/UPDATE/*id* and type in the body the update vesion
- use "/DELETE/*id* to delete a specific row in the database.
- added error handling for missing endpoints (404).
- added error handling for server errors (500).