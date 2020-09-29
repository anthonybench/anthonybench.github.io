/*
    Note, this widget relies on the Node object `https` for the api call.
    No Node, no bueno!
*/

// imports
const https = require('https');
const api = require('./api.json');

// utility
function logWeather(payLoad) {
    const currTemp = Math.round(payLoad.main.temp - 273);
    const minTemp = Math.round(payLoad.main.temp_min - 273);
    const maxTemp = Math.round(payLoad.main.temp_max - 273);

    console.log(`-- Anchorage, Alaska --`);
    console.log(`Curent Temp: ${currTemp}C High: ${maxTemp}C Low: ${minTemp}C`);
    console.log(`Relative humidity: ${payLoad.main.humidity}%`);
    console.log(`Wind speed: ${payLoad.wind.speed} mph`);
    // console.log(payLoad); //uncomment to view entire response
}
function logError(error) {
    console.error(error.message);
}

// fetching
function getFiveDay(location) {
    try {
        const request = https.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}1&appid=${api.openweather}`,
            res => {
                let body = "";
                res.on('data', data => {
                    body += data.toString();
                });
                res.on('end', () => {
                    try {
                        const payLoad = JSON.parse(body);
                        logWeather(payLoad);
                    } catch (error) {
                        logError(error);
                    }
                });
        });
        
    } catch(error) {
        logError(error);
    }
}

getFiveDay("Anchorage,us");