/** @format */

jQuery(document).ready(function () {
  const offerSlider2 = $('#offerSlider2');

  offerSlider2.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      1200: {
        items: 2,
      },

      1650: {
        items: 3,
      },
    },
  });

  $('#offer-sliderRight-second').click(function () {
    offerSlider2.trigger('next.owl.carousel');
  });
  $('#offer-sliderLeft-second').click(function () {
    offerSlider2.trigger('prev.owl.carousel');
  });
});
