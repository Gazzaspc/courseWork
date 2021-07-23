// Foursquare API Info
var clientId = '';
var clientSecret = '';
const url = 'https://api.foursquare.com/v2/venues/explore';
const nearParam = "?near=";

// OpenWeather Info
var openWeatherKey = '';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4"), $("#venue5"), $("#venue6")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//My date function
var todaysDate = new Date();

function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return yyyy + (mmChars[1] ? mm : "0" + mmChars[0]) + (ddChars[1] ? dd : "0" + ddChars[0]);
    //return as YYYYMMDD
}

let fDate = (convertDate(todaysDate)); // Returns: todays date as YYYYMMDD

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${nearParam}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${fDate}`

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            //console.log(response.message);
            const jsonResponse = await response.json();

            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            console.log(venues);
            return venues;
        }
    } catch (error) {
        console.log(error);
    }

} //end of getVenues

const getForecast = async () => {
    
    const urlToFetch = `${weatherUrl}?q=${$input.val()}&appid=${openWeatherKey}`;
    try {

        const response = await fetch(urlToFetch);

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
    console.log("Venues = " + venues);


    $venueDivs.forEach(($venue, index) => {
        const venue = venues[index];
        const venueIcon = venue.categories[0].icon;
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    // Add your code here:
    const weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    clientId = document.getElementById("fourID").value;
    clientSecret = document.getElementById("fourSecret").value;
    openWeatherKey = document.getElementById("weatherKey").value;

    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues()
        .then(venues => {
            return renderVenues(venues);
        });
    getForecast()
        .then(forecast => {
            return renderForecast(forecast);
        })
    return false;
}

$submit.click(executeSearch)