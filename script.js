// Function that applies one of 3 random colors: Green, Blue, or Red
function randomColor(element) {
    const colors = ['green', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    element.style.color = colors[randomIndex];
}

// When someone clicks on any h5 tags, make them change to a random color
const h5Tags = document.querySelectorAll('h5');

h5Tags.forEach(function(h5) {
    h5.addEventListener('click', function() {
        randomColor(this);
    });
});