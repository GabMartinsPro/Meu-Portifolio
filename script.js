// script.js

let counter = 1;

// Initialize the first radio button as checked
document.getElementById('radio1').checked = true;

setInterval(function() {
    nextImage();
}, 2000); // Change image every 2 seconds (2000 milliseconds)

function nextImage() {
    counter++;
    if (counter > 4) { // If it goes past the last image (4), reset to 1
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true; // Check the next radio button
}

// Optional: Add event listeners for manual navigation buttons (dots)
// This makes sure the auto-play continues correctly after a manual click
const manualBtns = document.querySelectorAll('.manual-btn');
manualBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        counter = index + 1; // Update counter based on clicked button
        // The radio button is already checked by the HTML 'for' attribute,
        // but updating the counter helps the auto-play function correctly from this point.
    });
});