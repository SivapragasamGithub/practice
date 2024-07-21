const countryContainer = document.getElementById('country-container');

// Fetch countries data
fetch('https://restcountries.com/v3.1/all')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(countries => {
        countries.forEach(country => {
            const countryName = country.name.common;
            const capital = country.capital ? country.capital[0] : 'N/A';
            const region = country.region;
            const latlng = country.latlng;
            const flagUrl = country.flags.svg;

            // Fetch weather data
            fetch(`https://openweathermap.org/`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(weather => {
                    const weatherDescription = weather.weather[0].description;
                    const temperature = weather.main.temp;

                    // Create Bootstrap card
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.style.width = '18rem';
                    card.innerHTML = `
                        <img src="${flagUrl}" class="card-img-top" alt="Flag of ${countryName}">
                        <div class="card-body">
                            <h5 class="card-title">${countryName}</h5>
                            <p class="card-text">Capital: ${capital}</p>
                            <p class="card-text">Region: ${region}</p>
                            <p class="card-text">Weather: ${weatherDescription}</p>
                            <p class="card-text">Temperature: ${temperature} °C</p>
                        </div>
                    `;

                    countryContainer.appendChild(card);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    // Handle the error by showing a message in the card
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.style.width = '18rem';
                    card.innerHTML = `
                        <img src="${flagUrl}" class="card-img-top" alt="Flag of ${countryName}">
                        <div class="card-body">
                            <h5 class="card-title">${countryName}</h5>
                            <p class="card-text">Capital: ${capital}</p>
                            <p class="card-text">Region: ${region}</p>
                            <p class="card-text text-danger">Weather data not available</p>
                        </div>
                    `;
                    countryContainer.appendChild(card);
                });
        });
    })
    .catch(error => {
        console.error('Error fetching countries data:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger';
        errorMessage.innerText = 'Error fetching countries data. Please try again later.';
        countryContainer.appendChild(errorMessage);
    });
