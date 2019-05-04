# liri-bot

#program flow and psuedocode

-create log.txt file

- make it so liri.js can take the commands by creating a var = to process.argv[3]

  -if process.argv[3] is equal to:

    -concert: searches bands intown and returns an object with concert location data
      -write the results to a log.txt file

    -spotify: searches spotify for musicians and songs and returns an object
      -write the results to a log.txt file

    -movie: searches ombd and returns an object with movie data
      -write the results to a log.txt file
      
    -do-what-it-says:
      -write the results to a log.txt file
