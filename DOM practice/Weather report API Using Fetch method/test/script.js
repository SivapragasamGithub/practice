const apiKey = "a6f647f93986a3281cb9bcf6c0cac7e0"; // Replace with your OpenWeatherMap API key

fetch("https://restcountries.com/v3.1/all", {
    method: "GET"
})
    .then(response => response.json())
    .then(result => {
        const container = document.getElementById('countries-container');

        result.forEach(element => {
            // Create card container
            let card = document.createElement('div');
            card.className = 'card col-md-3'; // Ensures 4 cards per row on medium screens and up

            // Create country name div
            let cardHeader = document.createElement('div');
            cardHeader.className = 'card-header';
            cardHeader.innerHTML = `<h5 class="card-title">${element.name.common}</h5>`;

            // Create flag image div
            let cardImgContainer = document.createElement('div');
            cardImgContainer.className = 'card-img-container';
            let cardImg = document.createElement('img');
            cardImg.className = 'card-img-top';
            cardImg.src = element.flags.png;
            cardImg.alt = `${element.name.common} Flag`;
            cardImgContainer.appendChild(cardImg);

            // Create card body with country details and weather button
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            cardBody.innerHTML = `
            <p class="card-text">Capital: ${element.capital ? element.capital[0] : 'N/A'}</p>
            <p class="card-text">Region: ${element.region}</p>
            <p class="card-text">Country Code: ${element.cca2}</p>
            <button class="btn btn-primary weather-btn" data-country="${element.name.common}" onclick="fetchWeather('${element.name.common}', '${element.cca2}')">Weather</button>
            <div class="weather-info" id="weather-${element.cca2}" style="display: none;"></div>
        `;

            // Append sections to card
            card.appendChild(cardHeader);
            card.appendChild(cardImgContainer);
            card.appendChild(cardBody);

            // Append card to container
            container.appendChild(card);
        });
    })
    .catch(err => {
        console.log(err);
    });

function fetchWeather(countryName, countryCode) {
    const weatherElement = document.getElementById(`weather-${countryCode}`);
    const weatherBtn = document.querySelector(`[data-country="${countryName}"]`);

    // Show loading text
    weatherElement.innerHTML = 'Loading weather data...';
    weatherElement.style.display = 'block';

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
        .then(response => response.json())

        .then(data => {
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                weatherElement.innerHTML = `
                <p>Weather: ${weatherDescription}</p>
                <p>Temperature: ${temperature} °C</p>
            `;
            } else {
                weatherElement.innerHTML = 'Weather data not available.';
            }
        })
        .catch(err => {
            console.log(err);
            weatherElement.innerHTML = 'Error fetching weather data.';
        });
}
