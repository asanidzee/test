
document.addEventListener('DOMContentLoaded', () => {

    const genreButtons = document.querySelectorAll('.genre-btn');
    const movieCards = document.querySelectorAll('.movie-card');

    genreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.getAttribute('data-genre');
            movieCards.forEach(card => {
                card.style.display = card.getAttribute('data-genre') === genre || genre === "All" ? "block" : "none";
            });
        });
    });


    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        movieCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchValue) ? "block" : "none";
        });
    });

    movieCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s";
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = "scale(1)";
        });
    });
    });
