'use strict';

const accessToken = 'pk.eyJ1Ijoicm9iZXJ0b2FndWlycmUxOTc1IiwiYSI6ImNsYmwyamE0cTAzZzIzdW13OG9uc2tnZDgifQ.weAKBXx9xj0TFLKklrdZyg';

const script = document.getElementById('search-js');

script.onload = function() {
    mapboxsearch.autofill({
    accessToken
    });
};