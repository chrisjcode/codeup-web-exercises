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

//2. Set Variables up from Forecast


function displayCards(cityForecast) {
    // setting variables for understanding even though they arent needed
    let currentCity;
    let description;
    let humidity;
    let wind;
    let pressure;
    let highTemp;
    let lowTemp;
    let currentTemp;
    let icon;

    let forecastCardHolder = document.getElementById('forecast-card-container');
    for (let forecastIndex = 0; forecastIndex < cityForecast?.list?.length; forecastIndex += 8) {
        let newCard = createCard();
        console.log(newCard);

        let dateProp = `dt_txt`;
        console.log(new Date(cityForecast?.list[forecastIndex][dateProp]).toLocaleDateString('en-US'));
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

function createDetailListItem(newCard) {
    let newListItem = newCard.querySelector('.weather-details')[0].appendChild(document.createElement('li'));
    newListItem.classList.add('list-group-item');
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
