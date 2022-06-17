const countryList = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};


window.onload = function () {
    addCountries();
    display_navigation_bar();



    // testing stuff here 
    test();



}


function addCountries() {
    let element;
    let flag_image;
    let country_name;
    let container = document.querySelector(".container");
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'];
    for (let key in countryList) {
        let color = getColor();
        element = document.createElement('div');
        flag_image = document.createElement('img');
        element.classList.add("country_tile", countryList[key].charAt(0), key);
        if (alphabets.includes(countryList[key].charAt(0).toUpperCase())) {
            element.setAttribute('id', countryList[key].charAt(0).toUpperCase());
            alphabets.splice(alphabets.indexOf(element.id), 1);
        }
        element.style.background = color;
        flag_image.className = 'country_flag';
        flag_image.src = 'https://countryflagsapi.com/svg/' + key;
        country_name = document.createElement('p');
        country_name.className = "country_name";
        country_name.innerText = countryList[key];
        element.appendChild(flag_image);
        element.appendChild(country_name);
        container.appendChild(element);
        element.addEventListener('click', function () {
            getCountry(key, countryList[key]);
        });
    }
}

function getColor() {
    let i = Math.floor(Math.random() * (6));
    let colors = ['#F7D8FF', '#FFF6D4', '#C7DDFF', '#D6EDE6', '#FAD8CD', '#E8FFC3'];
    return colors[i];

}

function display_navigation_bar() {
    let navigation_bar = document.querySelector(".navi_bar");
    let p;
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];
    for (let i of alphabets) {
        p = document.createElement('a');
        p.className = 'alphabets';
        p.innerText = i;
        p.href = "#" + i;
        p.style.background = getColor();
        let color_copy = getColor();
        navigation_bar.appendChild(p);
        // p.addEventListener('click', function () {
        //     let country = document.getElementById(i);
        //     country.style.transform
        //     let color_code = country.style.backgroundColor;
        //     country.style.background = "#808080";
        //     setTimeout(change_color(country, color_code) , 2000);

        // });
    }
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var top_scroll_button = document.querySelector(".top_button");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_scroll_button.style.display = "block";
    } else {
        top_scroll_button.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function change_color( country , color_code) {
//     console.log(country);    
//     country.style.background = "rgba(0,0,0,0))";
//     console.log(color_code);
// }





// testing stuff here 
function test() {
    let information = document.querySelectorAll(".specific_country_info");
    for (let i of information) {
        i.style.background = getColor();
    }
}


function getCountry(element, name) {
    console.log(document.querySelectorAll('.' + element));
    fetch('https://restcountries.com/v3.1/alpha/' + element)
        .then(res => res.json())
        .then(data => initialize(data))
        .catch(err => console.log('Error:', err.message));
    function initialize(data) {
        console.log(data);
        data = data[0];
        // getData(data);
        document.querySelector('#specific_id').scrollIntoView();
        let country_flag_specific = document.querySelector('#specific_country_flag').src = 'https://countryflagsapi.com/svg/' + element;
        let country_name = document.querySelector('.specific_country_name').textContent = name;
        let capital_name = document.querySelector('.specific_country_capital').textContent = data.capital;
        let maps_button = document.querySelector('#maps_button').href = Object.values(data.maps)[0];
        let continent = document.querySelector('#continent').textContent = 'Continent : ' + data.continents;
        let subregion = document.querySelector('#subregion').textContent = 'Sub Region : ' + data.subregion;
        let currency = document.querySelector("#currency").textContent = 'Currency : ' + Object.values(data.currencies).filter(c => c.name).map(c => `${c.name} (${c.symbol})`).join(", ");
        let population = document.querySelector('#population').textContent = 'Population :' + getSimplifiedNumber(data.population);
        let callcode = document.querySelector('#callcode').textContent = 'Dialer Code : ' + data.idd['root'] + data.idd['suffixes'];
        let language = document.querySelector('#language').textContent = 'Languages : ' + Object.keys(data.languages).map(function(k){return data.languages[k]}).join(', ');
        let timezone = document.querySelector('#timezone').textContent = 'Time Zone : ' + data.timezones[0];



        let specific_div = document.querySelector('.specific').style.display = 'block';
       


    }
}


// function getData({
//     name,
//     capital,
//     callingCodes,
//     population,
//     currencies,
//     region
// }) {
//     console.log({
//         name,
//         capital,
//         callingCodes,
//         population,
//         currencies,
//         region
//     });

// }

function getSimplifiedNumber(population) {

    // Nine Zeroes for Billions
    return Math.abs(Number(population)) >= 1.0e+9

        ? (Math.abs(Number(population)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(population)) >= 1.0e+6

            ? (Math.abs(Number(population)) / 1.0e+6).toFixed(2) + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(population)) >= 1.0e+3

                ? (Math.abs(Number(population)) / 1.0e+3).toFixed(2) + "K"

                : Math.abs(Number(population));

}


function close_window() {
    console.log("window is closed");
    let f = document.querySelector('.specific').style.display = '';
    console.log(f);
}
