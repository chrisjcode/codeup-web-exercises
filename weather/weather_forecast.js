// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//1. Get Weather Forecast
import {WEATHER_TOKEN} from "../keys.js";
import {MAPBOX_TOKEN} from "../keys.js";

let token = MAPBOX_TOKEN
mapboxgl.accessToken = token;

let saginawLatLong = [-97.363907, 32.860128];
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
    zoom: 12, // starting zoom
    center: saginawLatLong// [lng, lat]
});

// Set marker options.
let marker;

async function getWeatherForCast([long, lat] = [-97.3639, 32.8601]) {
    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lon=${long}&lat=${lat}` +
        `&appid=${WEATHER_TOKEN}` +
        `&units=imperial`).then(data => data.json())
        .then(currentWeather => currentWeather);
}

// await prevents variable being used until the Promise returns, preventative for errors
let cityForecast = await getWeatherForCast();
setCurrentCity(cityForecast);

// set current city
function setCurrentCity(cityForecast) {
    // set current city
    let currentCity = cityForecast.city.name;
    document.getElementById('current-city').innerText = "Current City: " + `${currentCity}`;
    document.getElementById('current-city-header').innerText = "Weather in " + `${currentCity}`;

}

let currentCity = cityForecast.city.name;
document.getElementById('current-city').innerText = "Current City: " + `${currentCity}`;

let currentCoordinates = cityForecast.city.coord;

//2. Set Variables up from Forecast

function setUpWeatherDetails(cityDailyForecast) {
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
    let roundUp = (temp) => Math.round(temp);
    newCard.querySelector('.date-text').innerHTML = weatherDetails.date;
    newCard.querySelector('.low-high').innerHTML = "<span>&#176;</span> " + weatherDetails.lowTemp.toFixed(1) + "<span class='temp-designator'> L</span>" + ` / ` + "<span>&#176;</span> " + weatherDetails.highTemp.toFixed(1) + "<span class='temp-designator'> H</span>";
    newCard.querySelector('.current-temp').innerHTML = "<span>&#176;</span> " + `${roundUp(weatherDetails.currentTemp)}`;
    newCard.querySelector('.forecast-icon').alt = weatherDetails.description;
    newCard.querySelector('.forecast-icon').src = `  http://openweathermap.org/img/w/${weatherDetails.icon}.png`

    createDetailListItem(newCard).innerHTML = `Description: <span class='detail-value'>${weatherDetails.description}</span>`;
    createDetailListItem(newCard).innerHTML = `Humidity: <span class='detail-value'>${weatherDetails.humidity}</span>`;
    createDetailListItem(newCard).innerHTML = `Wind: <span class='detail-value'>${weatherDetails.wind}</span>`;
    createDetailListItem(newCard).innerHTML = `Pressure: <span class='detail-value'>${weatherDetails.pressure}</span>`;
}

let forecastCardHolder = document.getElementById('forecast-card-container');

function displayCards(cityForecast) {
    forecastCardHolder.innerHTML = "";
    for (let forecastIndex = 0; forecastIndex < cityForecast?.list?.length; forecastIndex += 8) {
        let newCard = createCard();
        let weatherDetails = setUpWeatherDetails(cityForecast.list[forecastIndex]);
        placeWeatherDetails(newCard, weatherDetails);
        forecastCardHolder.appendChild(newCard);
    }
    setCurrentCity(cityForecast);
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
    iconHolder.classList.add('icon-holder');
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
    let newListItem = newCard.querySelector('.weather-details').appendChild(document.createElement('li'));
    newListItem.classList.add('list-group-item');
    return newListItem;
}

displayCards(cityForecast);


//4. Show map

// shown by weather-map.js

//5.  Map extras - Marker that is draggable, only one marker at a time
function removeMarker() {
    if (marker) {
        marker.remove();
    }
}

function reAddMarker(latLong) {
    marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat(latLong)
        .addTo(map);
}

async function findCoordsBySearch(search = "Saginaw, TX") {
    if (!search.length) {
        return;
    }
    return geocode(search, token).then(result => result)
}

document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault();
    if (event.target[0].value.length) {
        let searchValue = event.target[0].value;
        // prevent ALL clicks from navigating
        removeMarker();
        const latLong = await findCoordsBySearch(searchValue);
        applyCoordinatesToMap(latLong);
        reAddMarker(latLong);
        displayCards(await getWeatherForCast(latLong));

    }
});

function applyCoordinatesToMap(latLong) {
    map.flyTo({
        center: latLong, zoom: 12, speed: 0.8,
        curve: 1
    })
}

function addMarkerOnClick() {
    if (marker) {
        removeMarker();
    }
    map.on('click', add_marker.bind(this))
    // marker = new mapboxgl.Marker();
    marker = new mapboxgl.Marker({
        draggable: true
    }).setLngLat(saginawLatLong)
        .addTo(map);
}

addMarkerOnClick();

async function add_marker(event) {
    console.log(event.lngLat);
    let coordinates = event.lngLat;
    console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
    marker.setLngLat(coordinates).addTo(map);

    applyCoordinatesToMap([coordinates.lng, coordinates.lat]);
    displayCards(await getWeatherForCast([coordinates.lng, coordinates.lat]));

}

function markerDrop() {

}

async function onDragEnd() {
    const coordinates = marker.getLngLat();

    applyCoordinatesToMap([coordinates.lng, coordinates.lat]);
    displayCards(await getWeatherForCast([coordinates.lng, coordinates.lat]));
}

marker.on('dragend', onDragEnd);


// Marker Change By Click on map and removes old marker
// Marker Change by clicking on new map area Triggers new map an weather data
// Marker dropped Triggers new map an weather data


//Bonus Update Search Bar with city of the marker drop
