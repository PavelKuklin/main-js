import SliderCarusel from './classCaorusel';

const mycarousel = () => {
  const carousel = new SliderCarusel({
    main: '#services',
    wrap: '.services-slider',
    arrowWrap: '.arrowWrap',
    slidesToShow: 4,
    infinity: true,
    responsive: [{
      breackpoint: 1024,
      slideToShow: 3,
    },
    {
      breackpoint: 768,
      slideToShow: 2,
    },
    {
      breackpoint: 576,
      slideToShow: 1,
    },
    ]
  });

  carousel.init();
};

export default mycarousel;