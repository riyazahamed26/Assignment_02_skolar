// JavaScript for showing slides based on navigation clicks
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

// Function to show a specific slide
function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

// Show the first slide by default
showSlide(slideIndex);

// JavaScript for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.slide').forEach(slide => {
            slide.style.display = 'none';
        });
        document.getElementById(targetId).style.display = 'block';
    });
});
