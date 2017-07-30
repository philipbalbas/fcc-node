# FCC - NODE Tutorial

## About
We made a note taking application. It's currently commented out at the bottom of app.js.

Finally we also made an express wep application with a /weather route. Enter any location after /weather/ in the address bar to give the current temperature of the entered location. For example entering localhost:3000/weather/makati will get the current temperature in Makati.


## Commands
Once installed run:

    npm install
    npm start

1. The first command installs the dependencies.
2. The second start the express server at port 3000

## Dependencies
1. Axios - fetches data from the web. (vs. fetch API)
2. Express - web framework to easily build web applications. (vs. Koa, Loopback, Hapi)
3. Handlesbars (HBS) - templating engine to render our html pages. (vs. EJS, Pug)
4. Yargs - allows us to easily get commands from the command line

## Improvements
1. Make a /todo route page to make notes
2. Incorporate MongoDB