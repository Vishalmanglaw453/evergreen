function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross");
}

$(".responsive").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 4000,
  slidesToShow: 1,
  cssEase: "linear",
  variableWidth: true,
  slidesToScroll: 1,
});
$(".slick").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 4000,
  slidesToShow: 1,
  cssEase: "linear",
  variableWidth: true,
  slidesToScroll: 1,
});

$(".responsive2").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1118,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".responsive3").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000 ,
  prevArrow: ".left_arrow_pos",
  nextArrow: ".right_arrow_pos",
  fade:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 992,
          settings: {
              arrows: false,
              autoplay: true,
          },
      },
  ],
});
