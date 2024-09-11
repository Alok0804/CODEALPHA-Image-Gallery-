// Array of image sources
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg"];
let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Function to update the displayed image
function updateImage() {
    currentImage.src = images[currentIndex];
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Event Listeners for buttons
nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

// Initialize with the first image
updateImage();
