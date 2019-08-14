//Image Carousel//
jQuery(document).ready(function($) {
    $('.carousel').slick({
      centerMode: true,
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      variableWidth: true,
      responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});


//About Scroll Fade//
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  rootMargin: "0px 0px -120px 0px"
};

const appearOnScroll = new IntersectionObserver 
(function(
  entries, 
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})