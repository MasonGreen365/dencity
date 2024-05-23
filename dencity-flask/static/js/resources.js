document.addEventListener('DOMContentLoaded', function() {
    const housingCards = document.querySelectorAll('.housing-card');
    housingCards.forEach(function(card) {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});