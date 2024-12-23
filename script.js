// Simple project carousel logic
let currentSlide = 0;
const slides = document.querySelectorAll('.project');
const nextSlide = () => {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
};
setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.querySelector("form").addEventListener("submit", function(e) {
    const emailField = document.getElementById("email");
    if (!emailField.value.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});
