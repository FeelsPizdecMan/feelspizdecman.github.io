
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        autoplay: true,
        pagination: false,
        arrows: false,
        interval: 0,
        trimSpace: true,
        speed: 150000,
        waitForTransition: false,
        pauseOnHover: false,
    }).mount();
});


document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide__infra', {
      direction: 'ttb',
      height: '81vh',
      perPage: 1,
      perMove: 1,
      type: 'loop',
      gap: "5rem",
      arrows: false,
      autoplay: true,
      interval: 3000,
      pauseOnFocus: true,
      trimSpace: true,
      speed: 1500,
  }).mount();
});



document.addEventListener('DOMContentLoaded', function () {
    var secondarySlider = new Splide('#secondary-slider', {
        fixedWidth: "30vw",
        width: "20vw",
        height: "75vh",
        gap: "1rem",
        direction: "ttb",
        perPage: 3,
        perMove: 1,
        focus: "center",
        cover: true,
        isNavigation: true,
        pagination: false,
        type: "loop",
        breakpoints: {
            '600': {
                fixedWidth: 66,
                height: 40,
            }
        },
    }).mount();

    var mq = window.matchMedia("(max-width: 700px)");

    if (mq.matches) {
        var primarySlider = new Splide('#primary-slider', {
            type: 'loop',
            heightRatio: 1,
            pagination: false,
            arrows: false,
            cover: true,
        }); // do not call mount() here.
    } else {
        var primarySlider = new Splide('#primary-slider', {
            type: 'loop',
            heightRatio: 0.5,
            width: "79vw",
            height: "75vh",
            pagination: false,
            arrows: false,
            cover: true,
        }); // do not call mount() here.    
    }



    primarySlider.sync(secondarySlider).mount();
});
