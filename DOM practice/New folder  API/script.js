document.addEventListener('DOMContentLoaded', () => {
  const catImagesContainer = document.getElementById('cat-images');
  const loadMoreButton = document.getElementById('load-more');

  function fetchCatImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=4')
      .then(response => response.json())
      .then(data => {
        data.forEach(cat => {
          const catCard = document.createElement('div');
          catCard.className = 'col-md-3';
          catCard.innerHTML = `
            <div class="card mb-4">
              <img src="${cat.url}" class="card-img-top" alt="Random Cat">
            </div>
          `;
          catImagesContainer.appendChild(catCard);
        });
      })
      .catch(error => {
        console.error('Error fetching cat images:', error);
      });
  }

  loadMoreButton.addEventListener('click', fetchCatImages);

  // Initial load
  fetchCatImages();
});
