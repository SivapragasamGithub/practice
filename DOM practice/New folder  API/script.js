document.addEventListener('DOMContentLoaded', () => {
    const apiListContainer = document.getElementById('api-list');
  
    fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(data => {
        const apis = data.entries;
        apis.forEach(api => {
          const apiCard = document.createElement('div');
          apiCard.className = 'col-md-4';
          apiCard.innerHTML = `
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">${api.API}</h5>
                <p class="card-text">${api.Description}</p>
                <a href="${api.Link}" target="_blank" class="btn btn-primary">Go to API</a>
              </div>
            </div>
          `;
          apiListContainer.appendChild(apiCard);
        });
      })
      .catch(error => {
        console.error('Error fetching API list:', error);
      });
  });
  