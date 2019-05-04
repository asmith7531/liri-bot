require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

console.log(spotify)

var command = process.argv[3]

if(command = `concert`){
  console.log(command);
  
}
else if(command = `spotify`){
  console.log(command);

}
else if(command = `movie`){
  console.log(command);

}
else if(command = `do-what-it-says`){
  console.log(command);

}