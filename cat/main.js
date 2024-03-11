document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.Search-section button');
    const cards = document.querySelectorAll('.Cards-section .card');

    searchButton.addEventListener('click', function () {
        const searchTerm = document.querySelector('.Search-section input').value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector('.card__title').textContent.toLowerCase();
            const description = card.querySelector('.card__description').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

