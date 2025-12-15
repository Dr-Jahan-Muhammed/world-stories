// Load countries from JSON and render cards
fetch('data/countries.json')
.then(response => response.json())
.then(countries => {

  const container = document.getElementById('countries');
  const search = document.getElementById('search');

  // Function to render country cards
  function render(list) {
    container.innerHTML = '';
    list.forEach(c => {
      container.innerHTML += `
        <article class="card fade-in">
          <img src="${c.image}" alt="${c.name}">
          <div class="overlay">
            <h2>${c.name}</h2>
            <p>${c.mood}</p>
            <a href="pages/${c.id}.html">Enter →</a>
          </div>
        </article>
      `;
    });
  }

  // Initial render
  render(countries);

  // Live search filter
  search.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    render(countries.filter(c => c.name.toLowerCase().includes(q)));
  });

});

// Fade-in animation when scrolling
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
