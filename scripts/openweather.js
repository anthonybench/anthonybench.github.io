// imports
import { get } from 'https';
import { openweather } from './api.json';

// utility
function logWeather(payLoad) {
    const currTemp = Math.round(payLoad.main.temp - 273);
    const minTemp = Math.round(payLoad.main.temp_min - 273);
    const maxTemp = Math.round(payLoad.main.temp_max - 273);

    console.log(`Temp is ${currTemp}C with a high of ${maxTemp}C and a low of ${minTemp}C.`);
    console.log(`The rel.humidity is ${payLoad.main.humidity}%, with a wind speed of ${payLoad.wind.speed} mph`);
    // console.log(payLoad);
}
function logError(error) {
    console.error(error.message);
}

// fetching
function getFiveDay() {
    try {
        const request = get(
            `https://api.openweathermap.org/data/2.5/weather?q=Anchorage,us1&appid=${openweather}`,
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
