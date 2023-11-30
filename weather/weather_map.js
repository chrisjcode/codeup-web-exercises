// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//1. Get Weather Forecast
import {WEATHER_TOKEN} from "../keys.js";

async function getWeatherForCast() {
    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=29.426825118534886&lon=-98.48948239256946` +
        `&appid=${WEATHER_TOKEN}` +
        `&units=imperial`).then(data => data.json())
        .then(currentWeather => currentWeather);
}

// await prevents variable being used until the Promise returns, preventative for errors
let cityForecast = await getWeatherForCast();
let currentCity = cityForecast.city.name;
let currentCoordinates = cityForecast.city.coord;

// let cityForecast = await getWeatherForCast();
// let cityForecast = await getWeatherForCast();

console.log(cityForecast);
console.log(currentCity);
console.log(currentCoordinates);

//2. Set Variables up from Forecast

function setUpWeatherDetails(cityDailyForecast) {
    console.log(cityDailyForecast);
    let description = cityDailyForecast.weather[0]?.description;
    let humidity = cityDailyForecast.main.humidity;
    let wind = cityDailyForecast.wind.speed;
    let pressure = cityDailyForecast.main.pressure;
    let highTempProp = `temp_max`;
    let highTemp = cityDailyForecast.main[highTempProp];
    let lowTempProp = `temp_min`;
    let lowTemp = cityDailyForecast.main[lowTempProp];
    let currentTemp = cityDailyForecast.main.temp;
    let icon = cityDailyForecast.weather[0].icon;
    let dateProp = `dt_txt`;
    let date = new Date(cityDailyForecast[dateProp]).toLocaleDateString('en-US');

    return {
        description,
        humidity,
        wind,
        pressure,
        highTemp,
        lowTemp,
        currentTemp,
        icon,
        date,
        currentCoordinates,
        currentCity
    };

}

function placeWeatherDetails(newCard, weatherDetails) {
    //     weatherDetails.date,
    console.log(newCard.querySelector('.date-text'));
    newCard.querySelector('.date-text').innerText = weatherDetails.date;
    //     weatherDetails.lowTemp,
    //     weatherDetails.highTemp,
    newCard.querySelector('.low-high').innerText = weatherDetails.lowTemp + `/ ` + weatherDetails.highTemp;
    newCard.querySelector('.current-temp').innerText = weatherDetails.currentTemp;
    newCard.querySelector('.forecast-icon').alt = weatherDetails.description;
    newCard.querySelector('.forecast-icon').src = `  http://openweathermap.org/img/w/${weatherDetails.icon}.png`

    createDetailListItem(newCard).innerText = weatherDetails.description;
    createDetailListItem(newCard, false).innerText = weatherDetails.humidity;
    createDetailListItem(newCard).innerText = weatherDetails.wind;
    createDetailListItem(newCard).innerText = weatherDetails.pressure;


    console.log(newCard);
}


function displayCards(cityForecast) {
    let forecastCardHolder = document.getElementById('forecast-card-container');
    for (let forecastIndex = 0; forecastIndex < cityForecast?.list?.length; forecastIndex += 8) {
        let newCard = createCard();
        let weatherDetails = setUpWeatherDetails(cityForecast.list[forecastIndex]);
        placeWeatherDetails(newCard, weatherDetails);
        forecastCardHolder.appendChild(newCard);
    }
}

//3. Create Cards From Forecast
// creates a new Card that will be used to display all the weather info on
function createCard() {
//     create card container
    let cardShell = createCardContainer();
//     add card Header
    createCardHeader(cardShell);
//     add card card-body
    let cardBody = createCardBody(cardShell);
//     add html elements to the card body
    createCardBodyContent(cardBody);
//     add card list items
    createDetailList(cardBody);
    return cardShell;
}

function createCardContainer() {
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    return cardContainer;
}

function createCardHeader(cardContainer) {
    let cardHeader = cardContainer.appendChild(document.createElement('div'));
    cardHeader.classList.add('card-header');
    let dateText = cardHeader.appendChild(document.createElement('p'));
    dateText.classList.add('date-text');
}

function createCardBody(cardContainer) {
    let cardBody = cardContainer.appendChild(document.createElement('div'));
    cardBody.classList.add('card-body');
    return cardBody;
}

function createCardBodyContent(cardBody) {
    //     Element 1 of weather-big-picture.
    let weatherBigPicture = cardBody.appendChild(document.createElement('div'));
    weatherBigPicture.classList.add('weather-big-picture');

    let lowHigh = weatherBigPicture.appendChild(document.createElement('p'));
    lowHigh.classList.add('low-high');

    // Element 2 of weather-big-picture.
    let iconHolder = weatherBigPicture.appendChild(document.createElement('div'));
    let currentTempHolder = iconHolder.appendChild(document.createElement('span'));
    currentTempHolder.classList.add('current-temp');

    let forecastIcon = iconHolder.appendChild(document.createElement('img'));
    forecastIcon.classList.add('forecast-icon');
}

function createDetailList(cardBody) {
    let detailList = cardBody.appendChild(document.createElement('ul'));
    detailList.classList.add(...['list-group', 'list-group-flush', 'weather-details']);
}

function createDetailListItem(newCard, addClass = true) {
    let newListItem = newCard.querySelector('.weather-details').appendChild(document.createElement('li'));
    if (addClass) {
        newListItem.classList.add('list-group-item');
    }
    return newListItem;
}

displayCards(cityForecast);


//4. Show map

//5.  Map extras - Marker that is draggable, only one marker at a time

//6. Click Functionality on map to add marker and remove old marker

//7. Search Functionality For Map Data

//8. Search Functionality For Weather Data

//9.Change Map Based On Search Result

//10. Change Cards Based On Search Result

//11. Get Coordinates on after User clicks map and Get Coordinates on marker Drop

//12.Change Map Based On marker Drop

//13.Change Cards Based On Marker Drop

//Bonus Set up weather icons
//Bonus Update Search Bar with city of the marker drop
