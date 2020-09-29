// imports
const https = require('https');
const api = require('./api.json');

// utility
function logWeather(payLoad) {
    // console.log(`Temp is ${} with a high of ${} and a low of ${}. The rel.humidity is ${}%, with a `);
    console.log(payLoad);
}
function logError(error) {
    console.error(error.message);
}

// fetching
function getFiveDay() {
    try {
        const request = https.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Anchorage,us1&appid=${api.openweather}`,
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


getFiveDay();