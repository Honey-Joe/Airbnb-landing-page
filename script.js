$('.responsive').slick({
    dots: false,
    arrows:true,
    infinite: false,
    speed: 300,
    slidesToShow: 11,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint:1300,
        settings:{
          slidesToShow:7,
          slidesToScroll:1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });