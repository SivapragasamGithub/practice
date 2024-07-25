const options = {method: 'GET'};

fetch('https://api.tomorrow.io/v4?apikey=e0bmZSvcvJyVqfufzVZQY06PrKDZHahG', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));