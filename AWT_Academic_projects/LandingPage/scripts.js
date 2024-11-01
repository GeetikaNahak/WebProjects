let slideIndex = 0;
showSlides(slideIndex);

// Function to move to the next or previous slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to show the correct slide based on slideIndex
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    // Loop back to the first or last slide if out of range
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}
