'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXZpbG5hcHNpcyIsImEiOiJjazM2MHZtbXcwNm11M25reGY3NW1zMHhhIn0.FoA72lWHT4bXe2jxfH5uvQ';

let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v12',
center: [-97.17304579912934, 49.79584745938669], // starting position
zoom: 12
});


/*
function findMe() {
    let output = document.getElementById('map');

    // Verifying that my browser supports geolocation
    if (navigator.geolocation) {
        output.innerHTML= "<p>Your Browser Supports Geolocation</p>";
    } else {
        output.innerHTML= "<p>Your Browser Does Not Support Geolocation</p>";
    }

    // Obtenemos Latitud y Longitud
    function localizacion(posicion){
        let latitude = posicion.coords.latitude;
        let longitude = posicion.coords.longitude;

        output.innerHTML = "<p>Latitud: " + latitude + "<br>longitud: " + longitude + "</p>";
    }

    function error() {
        output.innerHTML = "<p>Your location could not be obtained </p>";
    }

    navigator.geolocation.getCurrentPosition(localizacion,error);
}


// Include Map
let map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center:[49.79584745938669, -97.17304579912934],
    zoom: 9
});

/* const accessToken = 'pk.eyJ1Ijoicm9iZXJ0b2FndWlycmUxOTc1IiwiYSI6ImNsYmwyamE0cTAzZzIzdW13OG9uc2tnZDgifQ.weAKBXx9xj0TFLKklrdZyg';

const script = document.getElementById('search-js');

script.onload = function() {
    mapboxsearch.autofill({
    accessToken
    });
};


*/