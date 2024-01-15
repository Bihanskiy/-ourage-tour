jQuery(document).ready(function() {

    const offerSlider = $('#offerSlider');

    offerSlider.owlCarousel({
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
            }
        }
    });

    $('#offer-sliderRight').click(function() {
        offerSlider.trigger('next.owl.carousel');
    })
    $('#offer-sliderLeft').click(function() {
        offerSlider.trigger('prev.owl.carousel');
    })
});