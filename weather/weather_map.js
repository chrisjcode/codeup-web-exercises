// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//Get Weather Forecast
import {WEATHER_TOKEN} from "../keys.js";

async function getWeatherForCast() {
    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=29.426825118534886&lon=-98.48948239256946` +
        `&appid=${WEATHER_TOKEN}` +
        `&units=imperial`).then(data => data.json())
        .then(currentWeather => currentWeather);
}

let cityForecast = await getWeatherForCast();

console.log(cityForecast);


// Set Variables up from Forecast

let currentCity;
let description;
let humidity;
let wind;
let pressure;
let highTemp;
let lowTemp;
let currentTemp;
let image;

function displayCards(cityForecast, numberOfDays = 5){
    for (let forecastIndex = 0; forecastIndex < ; forecastIndex++) {
        
    }
}

// <div className="card">
//     <div className="card-header">
//         Quote
//     </div>
//     <div className="card-body">
//         <div className="weather-big-picture">
//             <p>Low Temp / High Temp</p>
//             <div>
//                 <span>current temp</span><img className="forecast-icon" src="" alt="">
//             </div>
//         </div>
//         <ul className="list-group list-group-flush weather details">
//             <li className="list-group-item">An item</li>
//             <li className="list-group-item">A second item</li>
//             <li className="list-group-item">A third item</li>
//         </ul>
//     </div>
// </div>


//Create Cards From Forecast

//Show map

// Map extras - Marker that is draggable, only one marker at a time

// Click Functionality on map to add marker and remove old marker

// Search Functionality For Map Data

// Search Functionality For Weather Data

//Change Map Based On Search Result

//Change Cards Based On Search Result

// Get Coordinates on after User clicks map and Get Coordinates on marker Drop

//Change Map Based On marker Drop

//Change Cards Based On Marker Drop

//Bonus Set up weather icons
//Bonus Update Search Bar with city of the marker drop
