require("dotenv").config();
var express = require("express");
var axios = require("axios");
var cors = require("cors");
var mcache = require("memory-cache");
var serveStatic = require("serve-static");
var app = express();
var port = process.env.PORT || 3000;

// Controller that gets the weather
let fetchWeatherData = function(req, res, next) {
  axios
    .get(
      "https://api.darksky.net/forecast/" +
        process.env.HOMESCREEN_WEATHER_API_SECRET +
        "/" +
        process.env.HOMESCREEN_WEATHER_API_LAT_LONG +
        "?" +
        "units=" +
        process.env.HOMESCREEN_WEATHER_API_UNITS
    )
    .then(function(response) {
      let now = new Date();
      response.data.lastFetch = now.toLocaleString();
      res.json(response.data);
    })
    .catch(function(err) {
      console.log(err);
    });
};

// Caching middleware so we don't gobble our API limit
let cacheWeather = () => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      // For debugging cache
      console.log("CACHE is used");
      res.send(cachedBody);
      return;
    } else {
      // For debugging cache
      console.log("FETCH is used");
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, 5 * 60 * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

// Routes
// We only have two, so it's all in here
app.use(serveStatic(__dirname + "/dist"));
app.get("/data", cors(), cacheWeather(), fetchWeatherData);

app.listen(port);

console.log("Started our homescreen server on: " + port);
