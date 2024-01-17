// JavaScript code goes here
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  var nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
