document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide', {
        type: 'carousel', // Carousel mode
        startAt: 0, // Start at the first slide
        perView: 3, // Number of slides visible
        breakpoints: {
            1024: {
                perView: 2 // Show 2 slides on tablets
            },
            768: {
                perView: 1 // Show 1 slide on mobile
            }
        }
    }).mount();
});
