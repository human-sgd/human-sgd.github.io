window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    // Initialize results-carousel with its options
    var resultsCarousel = bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    });

    // Initialize comparison-carousel with its options
    var comparisonCarousel = bulmaCarousel.attach('#adobestock-comparison-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1, // Set slidesToShow to 1 for comparison-carousel
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    });

    // Initialize comparison-carousel with its options
    var comparisonCarousel = bulmaCarousel.attach('#thuman-comparison-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1, // Set slidesToShow to 1 for comparison-carousel
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    });

    bulmaSlider.attach();

    var section = document.getElementById("thuman");
    section.style.display = 'none';

})
