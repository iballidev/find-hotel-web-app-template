$("document").ready(function () {
  //   alert("hello world!!!");
  $(".reviews-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900:{
        items: 3,
      }
    },
  });

  $(".customNextBtn").click(function () {
    $(".reviews-slider").trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".customPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    $(".reviews-slider").trigger("prev.owl.carousel", [300]);
  });
});

