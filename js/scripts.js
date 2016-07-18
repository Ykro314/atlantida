console.log( "I am ready to work" );

var a = 2;
console.log( a );

$(document).ready(function(){

  $('.intro-slider').owlCarousel({
    items:1,
    nav:true,
    navText:"",
    navSpeed: 1000
  });

  $('.testimonials-slider').owlCarousel({
    items:1,
    dots: true,
    dotsSpeed: 600,
    autoplay: true,
    autoplaySpeed: 400,
    autoplayTimeout: 8000
  });

});

